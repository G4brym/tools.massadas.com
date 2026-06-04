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
- **[PDF Tools](/pdf-tools/)** — Merge, split, reorder, rotate, and delete pages across one or multiple PDFs.
- **[PDF to Images](/pdf-to-images/)** — Convert PDF pages to PNG, JPEG, or WebP at adjustable resolution; download all as a ZIP.
- **[PDF Compressor](/pdf-compress/)** — Shrink PDF file size by rasterizing pages to JPEG, with quality, scale, and grayscale controls.
- **[Image Converter](/image-converter/)** — Convert HEIC, WebP, AVIF, PNG, JPEG, GIF, and BMP images to any format.
- **[Background Remover](/background-remover/)** — Remove image backgrounds with an on-device AI model; transparent PNG output, no uploads.
- **[Video Converter](/video-converter/)** — Convert video/audio to MP4, WebM, GIF, MP3, or WAV and trim clips, locally with ffmpeg.wasm.
- **[Markdown Editor](/markdown-editor/)** — Live split-pane editor with formatting toolbar, GitHub-style preview, and MD/HTML/PDF export.
- **[Data Converter](/data-converter/)** — Convert data between JSON, YAML, and TOML with live preview and auto-detection.
- **[Timestamp Converter](/timestamp-converter/)** — Parse Unix timestamps or date strings and convert across any timezone.
- **[URL Encoder/Decoder](/url-encoder/)** — Encode/decode URL components, parse URLs into editable fields, and build query strings.
- **[Text Case Converter](/text-case/)** — Convert text between 12 case formats with live character, word, and reading-time stats.
- **[Lorem Ipsum Generator](/lorem-ipsum/)** — Generate placeholder text and tables of fake data as JSON, CSV, SQL, or a table.
- **[JSON ↔ CSV](/json-csv/)** — Convert JSON arrays to CSV (with nested flattening) and CSV back to JSON.
- **[HTML ↔ Markdown](/html-markdown/)** — Convert between HTML and Markdown in both directions with a sanitized preview.
- **[String Escape](/string-escape/)** — Escape/unescape strings across 12 formats: JSON, JS, HTML, XML, URL, SQL, CSV, Shell, and more.
- **[Number Base Converter](/number-base/)** — Convert numbers between binary, octal, decimal, hex, and any base 2–36.
- **[Text Encrypt/Decrypt](/text-encrypt/)** — Encrypt and decrypt text with AES-256-GCM (PBKDF2 password) in your browser.
- **[PGP Tool](/pgp/)** — Generate PGP keypairs and encrypt, decrypt, sign, and verify messages locally.
- **[Bcrypt Hash & Verify](/bcrypt/)** — Hash a password with bcrypt (adjustable cost) and verify a plaintext against any hash.
- **[Certificate Decoder](/cert-decoder/)** — Decode PEM X.509 certificates or chains: subject, issuer, validity, fingerprints, SANs.
- **[SVG to PNG](/svg-to-png/)** — Rasterize SVG markup or files to PNG, JPEG, or WebP at any scale or pixel size.
- **[Favicon Generator](/favicon-generator/)** — Generate a complete favicon set (ICO, PNGs, manifest, HTML snippet) as a ZIP.
- **[Color Palette Extractor](/color-palette/)** — Extract a color palette from any image; export as HEX/RGB, CSS variables, JSON, or Tailwind colors.
- **[Image Cropper](/image-cropper/)** — Crop images with aspect presets, rotate/flip, resize, and export to PNG/JPEG/WebP.
- **[ASCII Art Generator](/ascii-art/)** — Convert images to ASCII art, or generate ASCII block-letter banners from text.
- **[CSV ↔ Excel](/csv-xlsx/)** — Convert between CSV and Excel/ODS spreadsheets; preview sheets and download as CSV or XLSX.
- **[Mermaid Editor](/mermaid-editor/)** — Write and live-preview Mermaid diagrams with examples and SVG/PNG export.
- **[Invoice Generator](/invoice-generator/)** — Build invoices with live preview, line items, tax/discount, and PDF export.
- **[JSONPath Playground](/jsonpath/)** — Run JSONPath and JMESPath queries against JSON with live results and a cheat sheet.

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
