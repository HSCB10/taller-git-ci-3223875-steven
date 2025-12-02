import { suma } from '../src/suma.js';
import assert from 'node:assert';

assert.strictEqual(suma(2, 3), 5);
assert.strictEqual(suma(-1, 1), 0);

console.log('Tests OK');
