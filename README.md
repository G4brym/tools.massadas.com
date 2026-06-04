# tools.massadas.com

A collection of browser-only tools that run 100% locally — no data is ever sent anywhere.

Deployed as a Cloudflare Workers static asset site.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/G4brym/tools.massadas.com)

## Tools

- **[Swagger Playground](/swagger/)** — Paste or drag & drop an OpenAPI schema (JSON/YAML) to preview it with Swagger UI and see validation diagnostics.
- **[Image to PDF](/image-to-pdf/)** — Drop or select images, reorder by dragging, and download as a single PDF.
- **[PDF to Booklet](/pdf-booklet/)** — Upload a PDF and rearrange it into a foldable saddle-stitch booklet (2 pages per sheet) to print double-sided, fold, and staple.
- **[File to Markdown](/file-to-markdown/)** — Convert PDF, DOCX, PPTX, and other documents to Markdown using Cloudflare Workers AI.
- **[JSON Formatter](/json-formatter/)** — Format, validate, and syntax-highlight JSON. Minify, copy, or export as YAML.
- **[Base64 Encode/Decode](/base64/)** — Encode text or files to Base64, or decode Base64 back. Full UTF-8 support.
- **[JWT Decoder](/jwt-decoder/)** — Decode JWT header, payload, and check expiration status.
- **[Diff Viewer](/diff/)** — Paste two texts and see a highlighted side-by-side diff.
- **[Regex Tester](/regex/)** — Write regex patterns with live matching and capture group highlighting.
- **[CSV Viewer](/csv-viewer/)** — Paste or drop a CSV to view as a sortable, filterable table.
- **[UUID Generator](/uuid-generator/)** — Generate UUIDs (v4, v7), ULIDs, and Nanoids in bulk.
- **[Cron Parser](/cron-parser/)** — Parse cron expressions to see next run times and a plain English description.
- **[Color Converter](/color-converter/)** — Convert colors between HEX, RGB, HSL, and oklch.
- **[Hash Generator](/hash-generator/)** — Generate MD5, SHA-1, SHA-256, SHA-384, and SHA-512 hashes.
- **[Image Compressor](/image-compressor/)** — Resize, compress, and convert images between JPEG, PNG, and WebP.
- **[SVG Optimizer](/svg-optimizer/)** — Strip metadata and optimize SVGs to reduce file size.
- **[QR Code Generator](/qr-code/)** — Generate QR codes with custom size, colors, and error correction.
- **[Password Generator](/password-generator/)** — Generate secure random passwords or passphrases.
- **[EXIF Stripper](/exif-stripper/)** — View image EXIF metadata and download a stripped copy.

## Running Locally

```bash
# Install dependencies (npm, pnpm, or bun)
npm install

# Start the dev server
npm run dev
```

Then open [http://localhost:8787](http://localhost:8787).

> **Note:** The File to Markdown tool requires a Cloudflare AI binding and will only work when deployed to Cloudflare. All other tools work fully offline.

## Deploy to Cloudflare

The easiest way is the button above — it forks the repo and deploys to your Cloudflare account in one click.

To deploy manually:

```bash
npm install
npx wrangler deploy
```
