const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason( date ) {
  const seasons = {
    'winter': [11, 0 , 1],
    'spring': [2, 3, 4],
    'summer': [5, 6, 7],
    'autumn': [8, 9, 10],
  }

  let currMonth = date.getMonth();

  let season = '';

  for(let key in seasons) {
    for(let i = 0; i < seasons[key].length; i++) {
      if(currMonth === seasons[key][i]) {
        season = key;
        return season;
      }
    }
  }
}

module.exports = {
  getSeason
};
