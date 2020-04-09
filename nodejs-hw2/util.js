const program = require('commander');
const getDirTree  = require('./getDirTree');

const showTree = () => {
  program
    .version('0.0.1')
    .description('show directories and files as tree')
    .option('-d, --depth [depth]', 'output depth format')
    .arguments('[dirPath]')
    .action((dirPath) => {
      console.log(getDirTree(dirPath, program.depth));
    })
    .parse(process.argv);
}

module.exports = showTree;
