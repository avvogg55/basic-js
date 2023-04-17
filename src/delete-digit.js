const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let strNum = n.toString();
  let numLength = strNum.length;
  let maxNum = -1;
  for (let i = 0; i < numLength; i++) {
    let numWithoutDigit = parseInt(strNum.slice(0, i) + strNum.slice(i + 1));
    if (numWithoutDigit > maxNum) {
      maxNum = numWithoutDigit;
    }
  }
  return maxNum;
}

module.exports = {
  deleteDigit
};
