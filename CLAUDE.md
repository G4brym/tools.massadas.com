# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

tools.massadas.com is a collection of browser-only tools deployed as a Cloudflare Workers static asset site. Most tools run 100% client-side; some use Cloudflare Workers AI for processing (e.g. file-to-markdown).

## Commands

- `npm run dev` — local dev server via wrangler
- `npm run deploy` — deploy to Cloudflare Workers

## Architecture

- **Mostly static**: Wrangler serves `public/` as static assets. No build step. A Worker script (`src/worker.js`) handles API routes (e.g. `/api/convert-to-markdown`) for tools that need server-side processing via Cloudflare AI bindings.
- **Each tool is a standalone page** in its own folder under `public/` with its own `index.html` (e.g. `public/swagger/index.html` → `/swagger/`). Tools are independent — they do not share JS, state, or layout with each other. Each tool's design can differ from the index page.
- **`public/index.html`** is the landing page and index of all tools. When adding a new tool, add a card linking to it here.

## Rules

- **Tailwind CSS 4.1 only** — use `<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4.1"></script>` (it's a JS script, not a stylesheet). No other CSS framework.
- **Minimize dependencies.** Prefer vanilla JS. Only add a library when the tool genuinely requires it (e.g. swagger-ui for rendering OpenAPI specs, js-yaml for YAML parsing).
- **All browser dependencies must be loaded from jsDelivr CDN** (`cdn.jsdelivr.net`). Do not vendor/bundle libraries locally.
- **Tool-specific libraries load only on that tool's page.** Never add a library to the index or to other tools that don't need it.
- **100% browser-side.** Every tool must run entirely in the browser. No data is sent to any server, no analytics, no external API calls at runtime.
- **No shared JS framework, no bundler, no build tooling.** Each tool is a self-contained HTML file.
- **When adding or updating a tool**, always update `public/index.html` (add/update the tool card), `README.md` (add/update the tools list), `public/sitemap.xml` (add the URL), and `public/llms.txt` (add the tool entry) to keep them all in sync.
- **Sitemap `lastmod` dates** — every `<url>` in `public/sitemap.xml` must carry a `<lastmod>` tag in `YYYY-MM-DD` format. Whenever you create a new tool, add its `<url>` with `<lastmod>` set to today's date. Whenever you update an existing tool, bump that tool's `<lastmod>` to today's date (and bump the homepage `https://tools.massadas.com/` entry too, since its tool listing changed).
