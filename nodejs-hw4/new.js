// var LineStream = require('byline').LineStream;

// var input = fs.createReadStream('sample.txt');
// var output = fs.createWriteStream('nolines.txt');

// var lineStream = new LineStream();
// input.pipe(lineStream);
// lineStream.pipe(output);

// const getMinNum = (chunk, done) {
//   console.log('first')
//   setImmediate(() => {
//     console.log('second');
//     setImmediate(() => {
//       console.log('third');
//       done();
//     });
//   });
// }
// const readStream = fs.createReadStream('./file10', 'utf8');

// stream.on("readable", () => {
//   stream.pause();
//   processData(stream.read(), () => stream.resume());
// });
// const path = require('path');
// const {createReadStream} = require('fs');

// const FILE_NAME = path.resolve(process.cwd(), './file10');

// const readStream = createReadStream(FILE_NAME, 'utf8');



// async function main() {
  
//   for await (const chunk of readStream) {
//     console.log('>>> '+chunk);
//   }
//   console.log('### DONE ###');
// }

// main();