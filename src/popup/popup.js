// src/popup/popup.js
// Static popup — Ghostsnip declares zero Chrome permissions, so we don't read
// the active tab URL. The popup just tells the user how Ghostsnip works.

const headlineEl = document.getElementById('status-headline');
const detailEl = document.getElementById('status-detail');
const statusEl = document.getElementById('status');

statusEl.classList.add('active');
headlineEl.textContent = 'Open ChatGPT or Claude.';
detailEl.textContent = 'A "Save with Ghostsnip" button appears in the bottom-right of any conversation page. Click it to download the conversation as JSON.';
