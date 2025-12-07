/**
  Valid Anagram
Solved 
Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Example 1:

Input: s = "racecar", t = "carrace"

Output: true
Example 2:

Input: s = "jar", t = "jam"

Output: false
Constraints:

s and t consist of lowercase English letters.
 */
function isAnagram(s, t) {
  if (s.split("").sort().join("") === t.split("").sort().join("")) {
    console.log(s.split("").sort().join(""), t.split("").sort().join(""));
    return true;
  }
  return false;
}

console.log(isAnagram("jar", "jam"));
