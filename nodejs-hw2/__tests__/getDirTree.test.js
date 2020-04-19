const fs = require('fs');
const path = require('path');
const getDirTree = require('../getDirTree');

const examplePath = path.join(__dirname, '..', '/__fixtures__/', '/example/');

test('hw5---getDirTree without argument depth', () => {
  const result = getDirTree(examplePath);
  const expected = fs.readFileSync(path.join(examplePath, 'result-without-arg'), 'utf8');
  expect(result).toBe(expected);
})

test('hw5---getDirTree with argument depth = 2', () => {
  const exampleDepth = 2;
  const result = getDirTree(examplePath, exampleDepth);
  const expected = fs.readFileSync(path.join(examplePath, 'result-with-arg-2'), 'utf8');
  expect(result).toBe(expected);
})

