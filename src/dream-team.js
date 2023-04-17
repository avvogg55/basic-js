const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {

  if(Array.isArray(members)) {
    let abbr = [];
    for(let i = 0; i < members.length; i++) {
      if(typeof members[i] === 'string') {
        let temp = members[i].split(' ').join('');
        abbr.push(temp[0].toUpperCase());
      }
    }

    abbr.sort();
    let abbrString = abbr.join('');

    return abbrString;
  } else {
    return false;
  }
}

module.exports = {
  createDreamTeam
};
