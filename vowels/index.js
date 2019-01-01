// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// Solution 1:
// function vowels(str) {
//   vowels_arr = ["a", "e", "i", "o", "u"];
//   let count = 0;
//   for (let char of str.toLowerCase()) {
//     if (vowels_arr.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// }

// Solution 2:
function vowels(str) {
  let count = str.match(/[aeiou]/gi);
  // count will be null if no match found
  return count ? count.length : 0;
}

module.exports = vowels;
