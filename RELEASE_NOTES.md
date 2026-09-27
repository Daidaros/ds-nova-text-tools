# v0.2.0

Adds Bible.com text formatting to `ds-nova-text-tools`.

## Included

- `Bible.com: Formatear texto bíblico`
  - Formats selected text copied from Bible.com.
  - Supports normal paragraph output without verse numbers.
  - Supports verse-separated output with the verse number and verse text on separate lines.
- `RAE: Formatear comillas para Markdown`
  - Converts straight and curly English double quotes to Spanish angle quotes.
  - Preserves Markdown inline code and fenced code blocks.
  - Wraps the selected text when no double quotes are present.
- `WordPress: Convertir selección a permalink`
  - Converts selected text into a WordPress-style slug.
  - Removes accents, lowercases text, converts `&` to `y`, replaces punctuation with hyphens, collapses repeated hyphens, and keeps numbers.

## Installation

1. Download `TextTools.novaextension.zip`.
2. Unzip it.
3. Open Nova.
4. Choose `Extensions > Activate Project as Extension...`.
5. Select the `TextTools.novaextension` folder.
