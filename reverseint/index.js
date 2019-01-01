// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let rev = n
    .toString()
    .split('')
    .reverse()
    .join('');
  return parseInt(rev) * Math.sign(n);
  // '-' sign will be removed by parseInt
  // console.log(parseInt('123-')); => 123
  // console.log(parseInt('-')); => NaN
}

module.exports = reverseInt;
