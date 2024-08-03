/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // Remove spaces and convert to lowercase
  str1 = str1.replace(/\s+/g, '').toLowerCase();
  str2 = str2.replace(/\s+/g, '').toLowerCase();

  // If lengths differ, they cannot be anagrams
  if (str1.length !== str2.length) {
    return false;
  }

  const countchar1 = {};
  const countchar2 = {};

  // Count characters in str1
  for (let char of str1) {
    countchar1[char] = (countchar1[char] || 0) + 1;
  }

  // Count characters in str2
  for (let char of str2) {
    countchar2[char] = (countchar2[char] || 0) + 1;
  }

  // Compare the character counts
  for (let char in countchar1) {
    if (countchar1[char] !== countchar2[char]) {
      return false;
    }
  }

  return true;
}

module.exports = isAnagram;
