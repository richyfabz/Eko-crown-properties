import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

describe('vercel configuration', () => {
  it('keeps the SPA rewrite away from static asset requests', () => {
    const configPath = resolve(process.cwd(), 'vercel.json');
    const config = JSON.parse(readFileSync(configPath, 'utf8')) as {
      rewrites?: Array<{ source?: string; destination?: string }>;
    };

    expect(config.rewrites).toHaveLength(1);
    expect(config.rewrites?.[0].source).toBe('/((?!.*\\.).*)');
    expect(config.rewrites?.[0].destination).toBe('/index.html');
  });
});
