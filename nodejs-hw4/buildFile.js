// const fs = require('fs');
// const _ = require('lodash');


// const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

// const buildFile = async (outputPath) => {
//   try {
//     let stats = fs.statSync(outputPath);
//     while (stats.size <= 1048576) {
//       const data = getRandomInt(1000000);
//       await fs.promises.writeFile(outputPath, `${data}\n`, { flag: 'a' });
//       stats = await fs.promises.stat(outputPath);
//     }
//   } catch(err) {
//     console.log(err.message);
//   }
// }

// const getSeveralFiles = async (filePath) => {
//   try {
//     const data = await fs.promises.readFile(filePath, 'utf8');
//     const numArr = data.split('\n').map((str) => Number(str));
//     const chunkedData =
//       _.chunk(numArr, numArr.length / 3 + numArr.length % 3)
//       .map((arr) => _.orderBy(arr));
//     await Promise.all(chunkedData.map(async (chunk, i) => {
//       await fs.promises.writeFile(`file${i}`, `${chunk.join('\n')}`);
//     }));
//   } catch(err) {
//     console.log(err.message)
//   }
// }

// buildFile('./file');
//getSeveralFiles('./file');

// const rFile  = async (file) => {
//   return new Promise(resolve => {
//     const stream = fs.createReadStream(file, {encoding: 'utf8'});
//     stream.on('data', data => {
//       header = data.split(/\n/)[0];
//       stream.destroy();
//     });
//     stream.on('close', () => {
//       console.timeEnd(label);
//       resolve();
//     });
//   });
// }

// async function startTests(files) {
//   for (let file of files) {
//     console.log(file);
//     await read1(file);
//     await read2(file);
//   }
// }

