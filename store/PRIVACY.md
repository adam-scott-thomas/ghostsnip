# Privacy Policy — Ghostsnip

**Last updated:** 2026-04-29
**Live URL:** `https://ghostlogic.tech/ghostsnip/privacy`

Ghostsnip is a Chrome extension that adds a Save button to ChatGPT and Claude conversation pages. When you click that button, Ghostsnip reads the conversation from the page's DOM, builds a JSON file in memory, and triggers a browser download. This policy describes, plainly, what data Ghostsnip handles and what it does not.

> **Ghostsnip processes the page DOM entirely locally in the browser and does not transmit, store, or share this data externally.**

## What Ghostsnip does

Ghostsnip injects a content script onto three exact origins — `https://chatgpt.com`, `https://chat.openai.com`, and `https://claude.ai` — that draws a floating "Save with Ghostsnip" button on conversation pages. When you click the button, Ghostsnip reads the conversation messages from the DOM, builds a JSON file representing them, and asks your browser to download it. The download lands in your Downloads folder.

## What Ghostsnip stores

Ghostsnip stores nothing. There is no extension storage, no IndexedDB, no `chrome.storage` entries, no cookies. The conversation JSON is built in memory and immediately handed to the browser as a download. After the download completes, Ghostsnip retains nothing about it.

## What Ghostsnip transmits

**Nothing.** Ghostsnip makes no outbound HTTP requests of any kind. There is no Ghostsnip server. There is no analytics provider. There is no telemetry endpoint. There is no error reporting service.

You can verify this by:

1. Opening Chrome DevTools on a ChatGPT or Claude page, switching to the Network tab, clicking Save with Ghostsnip, and confirming nothing originating from the extension appears.
2. Inspecting the extension permissions in `chrome://extensions/` — Ghostsnip declares zero permissions.
3. Reading the source on GitHub (`https://github.com/adam-scott-thomas/ghostsnip`) and grepping for `fetch`, `XMLHttpRequest`, or `WebSocket`.

## Permissions

**Ghostsnip declares zero Chrome permissions.** No `storage`, no `host_permissions`, no `tabs`, no `activeTab`, no `scripting`, no `webRequest`. Content scripts on three exact origins are the entire access surface, and content scripts are not Chrome permissions in the same sense — they grant page-DOM access on those specific origins, nothing more.

The three origins Ghostsnip injects on are:

- `https://chatgpt.com/*`
- `https://chat.openai.com/*`
- `https://claude.ai/*`

That's it.

## Limited Use disclosure

Ghostsnip complies with the Chrome Web Store User Data Policy, including its Limited Use requirements:

- The data Ghostsnip handles (the messages on the AI conversation page you're viewing, at the moment you click Save) is used **solely** to build the JSON file you asked Ghostsnip to download.
- Ghostsnip does **not** transfer this data to any third party. There is no such third party in Ghostsnip's design — the data goes from the page DOM to your local Downloads folder, and nowhere else.
- Ghostsnip does **not** use this data for advertising, including personalized or targeted advertising.
- Ghostsnip does **not** allow humans to read this data.
- Ghostsnip does **not** sell this data.

## Third parties

Ghostsnip does not share data with any third party because Ghostsnip does not transmit data to any party at all.

The only third-party code in the source repository is development tooling (`vitest`) used to run unit tests. None of it is shipped in the extension package.

## Children's privacy

Ghostsnip is a developer-mode utility for capturing your own AI conversations. It is not directed at children under 13 and does not knowingly collect any data from anyone, including children.

## Changes to this policy

If a future version of Ghostsnip ever changes the data-handling model — for example, an opt-in cloud-upload feature — this policy will be updated and the extension's listing will explicitly call out the change. Until then, the rules above hold.

## Contact

Questions or concerns: email **support@ghostlogic.tech**.

## Open source

Ghostsnip is licensed under Apache 2.0. The full source is available at `https://github.com/adam-scott-thomas/ghostsnip`.
