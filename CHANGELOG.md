# Ghostsnip — Changelog

## v0.1.0 — 2026-04-29

Initial release.

- Adds a floating **Save with Ghostsnip** button to ChatGPT (`chatgpt.com`,
  `chat.openai.com`) and Claude (`claude.ai`) conversation pages
- One click → downloads the current conversation as a JSON file in
  Recall-compatible (Claude-array) format
- Strict DOM selectors with a structural fallback when the host UI changes
- Inline status feedback on success / failure

Privacy posture:

- Zero Chrome permissions declared
- Content scripts limited to three exact origins
- No outbound network requests
- No remote code, no analytics, no telemetry, no cookies
- Apache 2.0, Copyright GhostLogic LLC
