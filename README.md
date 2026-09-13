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

```text
"Qué es la Ley 21.719"
```

```text
«Qué es la Ley 21.719»
```

```text
¿Qué es la Ley 21.719 y cómo afecta a Shopify Chile?
```

```text
que-es-la-ley-21719-y-como-afecta-a-shopify-chile
```

```text
Autos usados: 7 días / 300 km de garantía
```

```text
autos-usados-7-dias-300-km-de-garantia
```

## Installation for development

1. Clone this repository.
2. Open Nova.
3. Choose `Extensions > Activate Project as Extension...`.
4. Select the `TextTools.novaextension` folder.
5. Use the commands from `Editor > digiSTART Text Tools`.

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
