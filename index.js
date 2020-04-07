const buildTree  = require('./buildTree');
const fs  = require('fs');

const filePath = process.argv[2];

const startBuildTree = async () => {
  const tree = JSON.parse(await fs.promises.readFile(filePath, 'utf8'));
  console.log(buildTree(tree));
}

startBuildTree();