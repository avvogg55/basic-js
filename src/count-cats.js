const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(backYard) {
  catsCount = 0;
  for(let i = 0; i < backYard.length; i++) {
    for(let j = 0; j < backYard[i].length; j++){
      if(backYard[i][j] === '^^') catsCount++;
    }
  }
  console.log(catsCount);
  return catsCount;
  // remove line with error and write your code here
}

module.exports = {
  countCats
};
