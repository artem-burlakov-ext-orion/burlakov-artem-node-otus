const fs = require('fs');
const path = require('path');
const getDirTree = require('../getDirTree');

const fixturePath = path.join(__dirname, '..', '/__fixtures__/');
const testDepth = 2;

test('getDirTree without argument depth', () => {
  const expected = fs.readFileSync(path.join(fixturePath, 'result-without-arg'), 'utf8');
  expect(getDirTree(fixturePath)).toBe(expected);
})

test('getDirTree with argument depth = 2', () => {
  const expected = fs.readFileSync(path.join(fixturePath, 'result-with-arg-2'), 'utf8');
  expect(getDirTree(fixturePath, testDepth)).toBe(expected);
})

