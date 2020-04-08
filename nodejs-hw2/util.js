const program = require('commander');
const getDirTree  = require('./buildTree');

const showTree = () => {
  program
    .version('0.0.1')
    .description('show directories and files as tree')
    .option('-d, --depth [depth]', 'output depth format')
    .arguments('[dirPath]')
    .action((dirPath, depth) => {
      console.log(getDirTree(dirPath, depth));
    })
  }

module.exports = showTree;
