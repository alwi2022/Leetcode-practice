// ## 10 Soal JavaScript Logic — Level 3

// ### 1. Cek Palindrome
function isPalindrome(text) {
  let result = "";
  for (let i = text.length - 1; i >= 0; i--) {
    result += text[i];
    if (result === text) {
      return true;
    }
  }
  return false;
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

// ### 2. Cari Angka Terbesar Kedua
// Buat function:

function findSecondLargest(numbers) {
  let max = -Infinity;
  let second = -Infinity;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      second = max;
      max = numbers[i];
    } else if (numbers[i] > second && numbers[i] < max) {
      second = numbers[i];
    }
  }

  return second;
}

console.log(findSecondLargest([10, 5, 18, 20, 15, 13, 12]));
// Output:

// ```text
// 15
// ```
