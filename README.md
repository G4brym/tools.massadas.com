# tools.massadas.com

A collection of browser-only tools that run 100% locally — no data is ever sent anywhere.

Deployed as a Cloudflare Workers static asset site.

## Tools

- **[Swagger Playground](/swagger/)** — Paste or drag & drop an OpenAPI schema (JSON/YAML) to preview it with Swagger UI and see validation diagnostics.
- **[Image to PDF](/image-to-pdf/)** — Drop or select images, reorder by dragging, and download as a single PDF.
- **[File to Markdown](/file-to-markdown/)** — Convert PDF, DOCX, PPTX, and other documents to Markdown using Cloudflare Workers AI.

## Development

```bash
npm install
npm run dev
```

## Deployment

```bash
npm run deploy
```
