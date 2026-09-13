function splitMarkdownCodeSegments(text) {
  const segments = [];
  let index = 0;

  while (index < text.length) {
    const fenceMatch = text.slice(index).match(/```[\s\S]*?```|~~~[\s\S]*?~~~/);
    const inlineMatch = text.slice(index).match(/`[^`\n]*`/);

    const matches = [fenceMatch, inlineMatch]
      .filter(Boolean)
      .sort((a, b) => a.index - b.index);

    if (matches.length === 0) {
      segments.push({ text: text.slice(index), isCode: false });
      break;
    }

    const match = matches[0];
    const start = index + match.index;
    const end = start + match[0].length;

    if (start > index) {
      segments.push({ text: text.slice(index, start), isCode: false });
    }

    segments.push({ text: text.slice(start, end), isCode: true });
    index = end;
  }

  return segments;
}

function convertDoubleQuotesToRae(text) {
  let opening = true;

  return text.replace(/["“”]/g, () => {
    const quote = opening ? "«" : "»";
    opening = !opening;
    return quote;
  });
}

function formatMarkdownRaeQuotes(text) {
  const hasDoubleQuotes = /["“”]/.test(text);

  if (!hasDoubleQuotes) {
    return `«${text}»`;
  }

  return splitMarkdownCodeSegments(text)
    .map((segment) => {
      if (segment.isCode) {
        return segment.text;
      }

      return convertDoubleQuotesToRae(segment.text);
    })
    .join("");
}

function normalizeNumericSeparators(text) {
  let normalized = text;
  let previous;

  do {
    previous = normalized;
    normalized = normalized.replace(/([0-9])[.,]([0-9])/g, "$1$2");
  } while (normalized !== previous);

  return normalized;
}

function convertToWordPressPermalink(text) {
  return normalizeNumericSeparators(text)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/ñ/g, "n")
    .replace(/ç/g, "c")
    .replace(/&/g, " y ")
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function replaceSelections(editor, transform) {
  const selectedRanges = editor.selectedRanges.slice().reverse();

  editor.edit((edit) => {
    for (const range of selectedRanges) {
      const selectedText = editor.getTextInRange(range);
      edit.replace(range, transform(selectedText));
    }
  });
}

nova.commands.register("formatMarkdownRaeQuotes", (editor) => {
  replaceSelections(editor, formatMarkdownRaeQuotes);
});

nova.commands.register("convertSelectionToWordPressPermalink", (editor) => {
  replaceSelections(editor, convertToWordPressPermalink);
});
