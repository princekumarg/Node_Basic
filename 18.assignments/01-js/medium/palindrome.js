/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let str1 = '';
  for (let i = str.length; i >= 0; i--) {
    str1 = str1 + str[i];
  }
  if (str1 !== str) {
    return false
  }
  return true;
}

module.exports = isPalindrome;
