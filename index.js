const fs  = require('fs');
const buildTree  = require('./buildTree');

const startBuildTree = async () => {
  try {
    const filePath = process.argv[2];
    const tree = JSON.parse(await fs.promises.readFile(filePath, 'utf8'));
    console.log(buildTree(tree));
  } catch (err) {
    console.log(err.message);
  }
}

startBuildTree();
