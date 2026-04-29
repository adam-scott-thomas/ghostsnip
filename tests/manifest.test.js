// tests/manifest.test.js
// Sanity checks on manifest.json — these mirror the assertions in CI but are
// also runnable locally via `npm test`.

import { describe, it, expect } from 'vitest';
import manifest from '../manifest.json';
import pkg from '../package.json';

describe('manifest.json', () => {
  it('declares MV3', () => {
    expect(manifest.manifest_version).toBe(3);
  });

  it('has a name, version, and description', () => {
    expect(manifest.name).toBe('Ghostsnip');
    expect(manifest.version).toMatch(/^\d+\.\d+\.\d+$/);
    expect(manifest.description.length).toBeGreaterThan(0);
  });

  it('declares zero permissions', () => {
    expect(manifest.permissions ?? []).toEqual([]);
    expect(manifest.host_permissions ?? []).toEqual([]);
  });

  it('limits content scripts to chatgpt + claude origins only', () => {
    const allowed = new Set([
      'https://chatgpt.com/*',
      'https://chat.openai.com/*',
      'https://claude.ai/*',
    ]);
    const cs = manifest.content_scripts || [];
    expect(cs.length).toBeGreaterThan(0);
    for (const block of cs) {
      for (const match of block.matches || []) {
        expect(allowed.has(match)).toBe(true);
      }
    }
  });

  it('matches package.json version', () => {
    expect(manifest.version).toBe(pkg.version);
  });
});
