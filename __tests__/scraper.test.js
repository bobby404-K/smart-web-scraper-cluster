import assert from 'node:assert';
import test from 'node:test';
import { ScraperCluster } from '../dist/scraper-cluster.js';

test('ScraperCluster cycles proxies and returns structured extraction', async () => {
  const cluster = new ScraperCluster(['http://proxy1:8080', 'http://proxy2:8080']);
  const res1 = await cluster.executeJob({ id: 'j1', url: 'https://example.com', selector: 'div', retries: 0 });
  const res2 = await cluster.executeJob({ id: 'j2', url: 'https://example.com', selector: 'div', retries: 0 });

  assert.ok(res1.content.includes('proxy1'));
  assert.ok(res2.content.includes('proxy2'));
});
