// // Tulis solusi Level 4 di file ini.

// Gas. Aku gabungkan **Hari 2 + Hari 3 jadi 20 soal**. Tetap boleh pakai `for`, `if`, object, array biasa. Modern methods cuma opsional.

// Aku bagi jadi 4 blok supaya progresnya jelas:

// ## A. Array/Object Logic — 5 soal

// ### 1. Cari Produk Termurah
// ```javascript
function findCheapestProduct(products) {
  // code here
  let result;
  let min = Infinity;
  for (let i = 0; i < products.length; i++) {
    let product = products[i];
    if (product.price < min) {
      min = product.price;
      result = product;
    }
  }

  return result;
}
// ```

// Input:

// ```javascript
console.log(
  findCheapestProduct([
    { name: "Keyboard", price: 350000 },
    { name: "Mouse", price: 150000 },
    { name: "Monitor", price: 2000000 },
  ]),
);
// ```

// Output:

// ```javascript
// {
//   name: "Mouse",
//   price: 150000
// }
// ```

// ---

// ### 2. Hitung User Aktif
// ```javascript
function countActiveUsers(users) {
  // code here
  let count = 0;
  for (let i = 0; i < users.length; i++) {
    if (users[i].active) {
      count++;
    }
  }
  return count;
}
// ```

// Input:

// ```javascript
console.log(
  countActiveUsers([
    { name: "Imam", active: true },
    { name: "Andi", active: false },
    { name: "Budi", active: true },
    { name: "Raka", active: true },
  ]),
);
// ```

// Output:

// ```text
// 3
// ```

// ---

// ### 3. Ambil Nama Produk yang Stoknya Tersedia
// ```javascript
function getAvailableProductNames(products) {
  // code here
  let result = [];

  for (let i = 0; i < products.length; i++) {
    let product = products[i];
    if (product.stock > 0) {
      result.push(product.name);
    }
  }
  return result;
}
// ```

// Input:

// ```javascript
console.log(
  getAvailableProductNames([
    { name: "Serum", stock: 5 },
    { name: "Toner", stock: 0 },
    { name: "Cleanser", stock: 2 },
  ]),
);
// ```

// Output:

// ```javascript
// ["Serum", "Cleanser"]
// ```

// ---

// ### 4. Hitung Rata-rata Nilai
// ```javascript
function calculateAverage(scores) {
  // code here
  let sum = 0;

  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }

  return sum / scores.length;
}
// ```

// Input:

// ```javascript
console.log(calculateAverage([80, 70, 90, 60]));
// ```

// Output:

// ```text
// 75
// ```

// ---

// ### 5. Cari User Berdasarkan Email
// ```javascript
function findUserByEmail(users, email) {
  // code here

  for (let i = 0; i < users.length; i++) {
    let user = users[i];
    if (user.email === email) {
      return user;
    }
  }
  return null;
}
// ```

const users = [
  {
    id: 1,
    name: "Imam",
    email: "imam@mail.com",
  },
  {
    id: 2,
    name: "Andi",
    email: "andi@mail.com",
  },
  {
    id: 3,
    name: "Budi",
    email: "budi@mail.com",
  },
];

console.log(findUserByEmail(users, "andi@mail.com"));

// Kalau ditemukan, return object user.
//{
//   id: 2,
//   name: "Andi",
//   email: "andi@mail.com"
// }

// Kalau tidak:

// ```text
// null
// ```

// ---

// # B. Level 4 Logic / Interview Style — 5 soal

// ### 6. Contains Duplicate
// ```javascript
function containsDuplicate(numbers) {
  //   let temp = numbers[1];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] === numbers[j]) {
        return true;
      }
    }
  }
  return false;
}
// ```

// Input:

// ```javascript
console.log(containsDuplicate([1, 2, 3, 1]));
// ```

// Output:

// ```text
// true
// ```

// Input:

// ```javascript
// [1, 2, 3, 4]
// ```

// Output:
console.log(containsDuplicate([1, 2, 3, 4]));
// ```text
// false
// ```

// ---

// ### 7. Valid Anagram
// ```javascript
function isAnagram(word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }

  let result = {};
  for (let i = 0; i < word1.length; i++) {
    let str = word1[i];
    if (result[str]) {
      result[str] += 1;
    } else {
      result[str] = 1;
    }
  }

  for (let i = 0; i < word2.length; i++) {
    let str = word2[i];
    if (!result[str]) {
      return false;
    }
    result[str] -= 1;
  }

  //   console.log(result)
  return true;
}
// ```

// Input:

// ```javascript
// isAnagram("racecar", "carrace")
// ```
console.log(isAnagram("racecar", "carrace"));
// Output:

// ```text
// true
// ```

// Input:

// ```javascript
// isAnagram("hello", "world")
// ```

// Output:

// ```text
// false
// ```

// ---

// ### 8. Majority Element
// Sebuah angka disebut majority kalau muncul lebih dari `n / 2` kali.

// ```javascript
function majorityElement(numbers) {
  // code here
  let result = {};

  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    if (result[number]) {
      result[number] += 1;
    } else {
      result[number] = 1;
    }
  }

  for (let key in result) {
    if (result[key] % 2 === 0) {
      return key;
    }
  }
}
// ```

// Input:

// ```javascript
// [3, 2, 3]
// ```
console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
// Output:

// ```text
// 3
// ```

// Input:

// ```javascript
// [2, 2, 1, 1, 1, 2, 2]
// ```

// Output:

// ```text
// 2
// ```

// Anggap selalu ada majority element.

// ---

// ### 9. Best Time to Buy and Sell Stock
// ```javascript
function maxProfit(prices) {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    let price = prices[i];

    if (price < minPrice) {
      minPrice = price;
    } else if (price - minPrice > maxProfit) {
      maxProfit = price - minPrice;
    }
  }

  return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
// 5
// ```

// Input:

// ```javascript
// ```

// Output:

// ```text
// 5
// ```

// Karena beli di `1`, jual di `6`.

// Tidak boleh jual sebelum beli.

// ---

// ### 10. Two Sum
// ```javascript
function twoSum(numbers, target) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        result.push(i, j);
      }
    }
  }

  return result;
}
// ```

// Input:

// ```javascript
console.log(twoSum([3, 2, 4], 6));
// ```

// Output:

// ```javascript
// [1, 2]
// ```

// ---
