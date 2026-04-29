# Ghostsnip

One-click save your ChatGPT or Claude conversation to a JSON file.

> Ghostsnip processes the page DOM entirely locally in the browser and does not transmit, store, or share this data externally.

Ghostsnip is a Chrome extension that adds a **Save with Ghostsnip** button to ChatGPT and Claude conversation pages. Click it and the current conversation downloads as a JSON file you control.

The exported file is in the same Claude-array format that the Recall extension imports natively, so you can pipe captures straight into a searchable archive — no waiting on official "Export Data" emails.

## What It Does

- Adds a floating **Save with Ghostsnip** button to chatgpt.com, chat.openai.com, and claude.ai conversation pages
- Click the button → the visible conversation downloads as JSON
- Output format is Recall-compatible (drop straight into Recall's import flow)
- No popup-based capture — the button is on the page itself, where the data is

## Privacy and Trust

Ghostsnip is built to be local-first and inspectable.

- **Zero Chrome permissions declared** — no `storage`, no `host_permissions`, no `tabs`, no `activeTab`
- Content scripts only on `chatgpt.com`, `chat.openai.com`, and `claude.ai` — three exact origins, nothing else
- No outbound network requests of any kind
- No analytics, no telemetry, no cookies, no remote code
- Apache 2.0 — read every line of the source
- No runtime dependencies

When you click Save, Ghostsnip reads the conversation messages from the page's DOM, builds a JSON envelope in memory, and triggers a browser download. The file lands in your Downloads folder. Ghostsnip never sends your data anywhere.

## Installation

Ghostsnip is currently installed in Chrome developer mode. The Chrome Web Store listing is in preparation.

Clone the repository:

```bash
git clone https://github.com/adam-scott-thomas/ghostsnip.git
```

Then:

1. Open Chrome and visit `chrome://extensions`
2. Enable Developer Mode in the top right
3. Click Load unpacked
4. Select the `ghostsnip/` directory containing `manifest.json`
5. Pin the Ghostsnip icon to your toolbar (optional — it's not required for the save button to appear)

## Usage

1. Open a ChatGPT or Claude conversation
2. Click the **Save with Ghostsnip** button in the bottom-right
3. The conversation downloads as `ghostsnip-<title>-<timestamp>.json`
4. Drop that file into [Recall](https://github.com/adam-scott-thomas/recall) to make it searchable, or keep it as a local archive

## Output format

Ghostsnip emits a one-element array in the Claude export shape, augmented with provenance fields so you can tell where a capture came from:

```json
[
  {
    "uuid": "...",
    "name": "Conversation title",
    "source": "chatgpt",
    "captured_by": "ghostsnip",
    "captured_at": "2026-04-29T12:34:56.789Z",
    "created_at": "2026-04-29T12:34:56.789Z",
    "updated_at": "2026-04-29T12:34:56.789Z",
    "chat_messages": [
      { "sender": "human", "text": "...", "created_at": "..." },
      { "sender": "assistant", "text": "...", "created_at": "..." }
    ]
  }
]
```

## When extraction breaks

ChatGPT and Claude update their UIs frequently. Ghostsnip uses strict CSS/data-attribute selectors first, with a structural fallback that walks the conversation container in DOM order. If both fail, the floating button shows an error inline and points at the support page.

If a save returns no messages or breaks layout: report at `https://ghostlogic.tech/ghostsnip/issues` or email `support@ghostlogic.tech`.

## Development

```bash
npm install
npm test
```

Tests run with Vitest. There's no build step — Ghostsnip is plain JavaScript loaded directly by Chrome.

## Pairs With

- **[Recall](https://github.com/adam-scott-thomas/recall)** — search every conversation Ghostsnip captures, plus your full ChatGPT/Claude exports and any text/markdown/HTML file. Local, zero-permission, Apache 2.0.

## License

Apache License 2.0. Copyright GhostLogic LLC.

See [LICENSE](LICENSE) for the full license text.
