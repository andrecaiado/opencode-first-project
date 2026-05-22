const assert = require('assert');
const { add } = require('../src/index');

try {
  // Basic unit test
  assert.strictEqual(add(1, 2), 3, 'add(1,2) should be 3');
  assert.strictEqual(add(-1, 1), 0, 'add(-1,1) should be 0');
  console.log('All tests passed');
  process.exit(0);
} catch (err) {
  console.error('Test failed:', err.message);
  process.exit(1);
}
