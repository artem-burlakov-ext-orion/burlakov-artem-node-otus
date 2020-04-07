// const obj = { 
//   "name": 1, 
//   "items": [{ "name": 2, "items": [{ "name": 3 }, { "name": 4 }]}, { "name": 5, "items": [{ "name": 6 }]}]
// };





const buildTree = (root) => {
  const iter = (n, currentDepth, acc) => { 
    const { name, items } = n;
    if (currentDepth === -1) {
      acc += `${name}\n`;
    } else {
      acc += ' '.repeat(currentDepth * 3 ) + '└──' + `${name}\n`;
    }
    if (!items) {
      return acc;
    }
    return items.reduce((cAcc, nn) => iter(nn, currentDepth + 1, cAcc), acc);
    }  
  return iter(root, -1, ``);
  }
  
console.log(buildTree(obj));