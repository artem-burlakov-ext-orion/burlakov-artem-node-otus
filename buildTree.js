const toChildSymbol = '└──';

const buildTree = (root) => {
  const iter = (n, curDepth, acc) => { 
    const { name, items } = n;
    const beforeValue = (curDepth === -1) ? '' : ' '.repeat(curDepth * toChildSymbol.length) + toChildSymbol;
    acc += `${beforeValue}${name}\n`;
    if (!items) {
      return acc;
    }
    return items.reduce((cAcc, nn) => iter(nn, curDepth + 1, cAcc), acc);
    }  
  return iter(root, -1, '');
  }
  
module.exports = buildTree;
