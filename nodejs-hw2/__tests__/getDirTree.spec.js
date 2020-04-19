const fs = require('fs');
const path = require('path');
const getDirTree = require('../getDirTree');

const examplePath = path.join(__dirname, '..', '/__fixtures__/', '/example/');

describe('getDirTree', () => {

  it('should return data without argument depth same as from \'result-without-arg\' ', () => {
    const result = getDirTree(examplePath);
    const expected = fs.readFileSync(path.join(examplePath, 'result-without-arg'), 'utf8');
    expect(result).toBe(expected);
  })

  it('should return data with argument depth = 2 same as from \'result-with-arg-2\' ', () => {
    const exampleDepth = 2;
    const result = getDirTree(examplePath, exampleDepth);
    const expected = fs.readFileSync(path.join(examplePath, 'result-with-arg-2'), 'utf8');
    expect(result).toBe(expected);
  })

  it('should return error if directory does not exist', () => {
    expect(() => getDirTree('./nonExistentDir')).toThrowError('No such file or directory');
  })
})
