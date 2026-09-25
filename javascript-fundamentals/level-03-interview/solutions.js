// ## 10 Soal JavaScript Logic — Level 3

// ### 1. Cek Palindrome
function isPalindrome(text) {
  let result = "";
  for (let i = text.length - 1; i >= 0; i--) {
    result += text[i];
    if(result === text){
        return true
    }
  }
  return false
}

console.log(isPalindrome("katak"));

// Output:
// ```text
// true
// ```

// ```javascript
console.log(isPalindrome("hello"));
// ```

// Output:

// ```text
// false
// ```
