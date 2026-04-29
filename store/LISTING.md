# Chrome Web Store Listing — Ghostsnip

Submission copy for Chrome Web Store. Keep within character limits noted in parentheses.

## Item details

**Name** (max 75 chars)
> Ghostsnip — Save your ChatGPT or Claude conversation in one click

**Summary** (max 132 chars)
> One click saves the conversation you're reading as a JSON file. Drop it into Recall to make it searchable. Fully local.

**Category**
> Productivity

**Language**
> English

---

## Detailed description (max 16,000 chars)

> ### Save the ChatGPT or Claude conversation you're reading — in one click.
>
> Ghostsnip adds a floating "Save with Ghostsnip" button to ChatGPT and Claude conversation pages. Click it, and the current conversation downloads as a JSON file you control. No waiting on official "Export Data" emails. No server. No account.
>
> ### What you get
>
> - **One-click capture** on `chatgpt.com`, `chat.openai.com`, and `claude.ai`.
> - **JSON output in Recall-compatible format** — drop the file straight into the [Recall](https://chrome.google.com/webstore/) extension to make it searchable.
> - **Provenance fields** — the saved file records `source`, `captured_by`, and `captured_at` so you can trace where each conversation came from.
> - **Inline status** — success and failure messages appear right next to the Save button, on the page itself.
>
> ### How privacy actually works
>
> Most "private" tools assume you'll trust them. Ghostsnip is built so you don't have to.
>
> - **Zero Chrome permissions declared.** No `storage`, no `host_permissions`, no `tabs`, no `activeTab`. Content scripts run only on three exact origins (chatgpt.com, chat.openai.com, claude.ai).
> - **Zero outbound network requests.** Ghostsnip makes no HTTP calls of any kind. There is no Ghostsnip server.
> - **No remote code, no analytics, no telemetry, no cookies.**
> - **Apache 2.0 open source.** Read every line of the source on GitHub. The package on the Web Store is built from a tagged commit and the build is reproducible.
>
> ### How to use it
>
> 1. Open a conversation on ChatGPT or Claude.
> 2. Click the "Save with Ghostsnip" button in the bottom-right of the page.
> 3. The conversation downloads as `ghostsnip-<title>-<timestamp>.json`.
>
> ### What to do with the JSON
>
> The output is in the same format Recall imports natively. Install Recall, import the file, search across every conversation you've ever saved.
>
> Or keep it as a local archive. The file is yours.
>
> ### Who this is for
>
> Anyone who uses ChatGPT or Claude often and wants captures faster than the official Export Data flow allows. Researchers, writers, engineers — people who want their AI conversation history under their own control without trusting a third party with it.
>
> ### Open source and licensing
>
> Apache License 2.0. Source: `https://github.com/adam-scott-thomas/ghostsnip`
>
> Built by GhostLogic. Pairs with [Recall](https://github.com/adam-scott-thomas/recall).

---

## Privacy practices (Chrome Web Store form)

| Question | Answer |
|---|---|
| Does this extension collect or use the user's personal or sensitive information? | **No** transmission. The user voluntarily clicks Save on a conversation they're already viewing; the resulting JSON is downloaded to their own machine. The data never leaves the browser. |
| Single purpose | One-click save the active ChatGPT or Claude conversation as a JSON file. |
| Permission justification | **Ghostsnip declares zero permissions.** Content scripts on three exact origins (chatgpt.com, chat.openai.com, claude.ai) are the entire access surface. |
| Remote code | **No.** All scripts are bundled in the extension package; no remote code is loaded. |
| Data usage certification | I certify that the use of data in Ghostsnip complies with the Chrome Web Store Developer Program Policies, including the Limited Use requirements of the User Data Policy. |

**Privacy policy URL:** `https://ghostlogic.tech/ghostsnip/privacy`

**Homepage URL:** `https://ghostlogic.tech/ghostsnip`

**Support URL:** `https://ghostlogic.tech/ghostsnip/issues`

### Reviewer test instructions

> 1. Install the extension.
> 2. Open a conversation on `https://chatgpt.com` or `https://claude.ai` (or `https://chat.openai.com`).
> 3. A floating "Save with Ghostsnip" button appears in the bottom-right of the page.
> 4. Click it. The conversation downloads as `ghostsnip-<title>-<timestamp>.json`.
> 5. Inspect the JSON — it contains the conversation messages in Claude-array format.
>
> Expected: no network requests originate from the extension at any point. The Network tab in DevTools confirms this. The extension declares zero Chrome permissions.

---

## Screenshots (you'll capture these — recommended set, all 1280×800 PNG)

1. **The Save button on a ChatGPT page** — bottom-right, with a real conversation visible behind it.
2. **The Save button on a Claude page** — same shot, different host.
3. **Mid-save status** — "Saved N messages." inline status visible above the button.
4. **The downloaded JSON** — opened in a code editor, showing the Claude-array structure.
5. **Recall importing the Ghostsnip JSON** — the cross-product story, visible as a screenshot of Recall's import flow with a `ghostsnip-*.json` file selected.

---

## Submission checklist

- [ ] CI green on `master`
- [ ] Privacy policy live at `https://ghostlogic.tech/ghostsnip/privacy`
- [ ] Landing page live at `https://ghostlogic.tech/ghostsnip`
- [ ] Support page live at `https://ghostlogic.tech/ghostsnip/issues`
- [ ] Tag the commit (`git tag v0.1.0 && git push --tags`)
- [ ] Build via `npm run package` and confirm zip is < 1 MB
- [ ] Capture 5 screenshots at 1280×800
- [ ] Upload to Chrome Web Store dashboard (one-time $5 dev fee if not already paid)
- [ ] Fill privacy practices form (answers above)
- [ ] Submit for review
