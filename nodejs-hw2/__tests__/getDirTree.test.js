const fs = require('fs');
const path = require('path');
const getDirTree = require('../getDirTree');

const fixturePath = path.join(__dirname, '..', '/__fixtures__/');

test('getDirTree', () => {
  const expected = fs.readFileSync(path.join(fixturePath, 'result'), 'utf8');
  expect(getDirTree(fixturePath, 3)).toBe(expected);
})

