# ds-nova-text-tools

Extension for [Panic Nova](https://nova.app/) with editorial text tools used by digiSTART.

## Initial tools

- `RAE: Formatear comillas para Markdown`
  - Converts straight and curly English double quotes to Spanish angle quotes: `«...»`.
  - Keeps Markdown inline code and fenced code blocks unchanged.
  - If the selected text has no quotes, wraps the whole selection with `«...»`.
- `WordPress: Convertir selección a permalink`
  - Converts selected text into a WordPress-style slug.
  - Removes accents, lowercases text, converts `&` to `y`, replaces punctuation with hyphens, collapses repeated hyphens, and keeps numbers.

## Examples

| Before | After |
| --- | --- |
| `"Lorem ipsum dolor sit amet"` | `«Lorem ipsum dolor sit amet»` |
| `Lorem ipsum: edición rápida & contenido básico` | `lorem-ipsum-edicion-rapida-y-contenido-basico` |
| `Dolor sit amet: versión 2.0 / página 15` | `dolor-sit-amet-version-20-pagina-15` |

## Installation

### From a release

1. Download the latest release from [GitHub Releases](https://github.com/Daidaros/ds-nova-text-tools/releases).
2. Unzip the downloaded file.
3. Open Nova.
4. Choose `Extensions > Activate Project as Extension...`.
5. Select the `TextTools.novaextension` folder.
6. Use the commands from Nova's `Editor` menu.

### From source

1. Clone this repository.
2. Open Nova.
3. Choose `Extensions > Activate Project as Extension...`.
4. Select the `TextTools.novaextension` folder.
5. Use the commands from Nova's `Editor` menu.

You can also validate the extension with Nova's command line tools:

```sh
nova extension validate TextTools.novaextension
```

## Repository structure

```text
ds-nova-text-tools/
├─ README.md
├─ LICENSE
├─ .gitignore
└─ TextTools.novaextension/
   ├─ extension.json
   ├─ extension.png
   ├─ CHANGELOG.md
   ├─ Scripts/
   │  └─ main.js
   └─ README.md
```

## GitHub setup

Suggested repository name:

```text
ds-nova-text-tools
```

After creating the repository on GitHub:

```sh
git remote add origin git@github.com:Daidaros/ds-nova-text-tools.git
git branch -M main
git push -u origin main
```

If the GitHub organization or account differs later, replace `Daidaros` with the correct owner.

## License

MIT
