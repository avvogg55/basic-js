const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let letters1 = [];
  let letters2 = [];
  let counter = 0;

  let lowS1 = s1.toLowerCase();
  let lowS2 = s2.toLowerCase();

  letters1 = lowS1.split('');
  letters2 = lowS2.split('');

  let mySet = new Set(letters1);

  for (let i = 0; i < letters1.length; i++) {
    if (letters2.includes(letters1[i])) {
      counter++;
      letters2.splice(letters2.indexOf(letters1[i]), 1);
    }
  }

  return counter;


}

module.exports = {
  getCommonCharacterCount
};
