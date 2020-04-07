const toChildSymbol = '└──';

const buildTree = (root) => {
  const iter = (n, curDepth, acc) => { 
    const { name, items } = n;
    acc += (curDepth === -1) ? `${name}\n` : ' '.repeat(curDepth * toChildSymbol.length) + toChildSymbol + `${name}\n`;
    if (!items) {
      return acc;
    }
    return items.reduce((cAcc, nn) => iter(nn, curDepth + 1, cAcc), acc);
    }  
  return iter(root, -1, ``);
  }
  
module.exports = buildTree;
