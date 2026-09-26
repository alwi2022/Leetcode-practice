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

// ### 3. Hapus Duplicate Secara Manual
// Buat function:

function removeDuplicates(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    let flags = false;
    for (let j = 0; j < result.length; j++) {
      if (numbers[i] === result[j]) {
        flags = true;
      }
    }
    if (!flags) {
      result.push(numbers[i]);
    }
  }

  return result;
}
console.log(removeDuplicates([1, 2, 2, 3, 1, 4]));
// Input:

// Output:

// ```javascript
// [1, 2, 3, 4]
// ```

// Jangan pakai:

// ```javascript
// Set
// ```

// Boleh pakai nested loop.

// Fokus: array baru, duplicate checking, `push()`.

// ---

// ### 4. Cari Angka yang Paling Sering Muncul
// Buat function:

// ```javascript
function mostFrequentNumber(numbers) {
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

  console.log(result);
  let mostcount = null;
  let mostnumber = 0;
  for (let key in result) {
    if (result[key] > mostnumber) {
      mostnumber = result[key];
      mostcount = Number(key);
    }
  }

  return mostcount;
}
// ```

// Input:

// ```javascript
console.log(mostFrequentNumber([1, 2, 2, 3, 2, 4, 3]));
// ```

// Output:

// ```text
// 2
// ```

// Gunakan object sebagai counter.

// Hint pattern:

// ```javascript
// const count = {};
// ```

// Lalu cari value terbesar dari object tersebut.

// Fokus: frequency map + mencari nilai terbesar.

// ---

// ### 5. Cek Anagram
// Dua kata disebut anagram kalau punya huruf yang sama dengan jumlah yang sama.

// Buat function:

// ```javascript
function isAnagram(word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }
  let result = {};
  for (let i = 0; i < word1.length; i++) {
    let wrd1 = word1[i];
    if (result[wrd1]) {
      result[wrd1] += 1;
    } else {
      result[wrd1] = 1;
    }
  }

  for (let i = 0; i < word2.length; i++) {
    let wrd2 = word2[i];
    if (!result[wrd2]) {
      return false;
    }
    result[word2] -= 1;
  }

  return true;
}
// ```

// Contoh:

// ```javascript
console.log(isAnagram("listen", "silent"));
// ```

// Output:

// ```text
// true
// ```

// ```javascript
console.log(isAnagram("hello", "world"));
// ```

// Output:

// ```text
// false
// ```

// Jangan pakai:

// ```javascript
// .sort()
// ```

// Fokus: frequency object.

// ---

// ### 6. Two Sum — Brute Force
// Buat function:

// ```javascript
function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}
// ```

// Input:

console.log(twoSum([2, 7, 11, 15], 9));
// Output:

// ```javascript
// [0, 1]
// ```

// Karena:

// ```text
// numbers[0] + numbers[1]
// 2 + 7 = 9
// ```

// Untuk sekarang gunakan nested loop.

// Fokus: nested loop, index, return array.

// ---

// ### 7. Cari User Paling Tua
// Diberikan:

// ```javascript

// ```

// Buat function:

// ```javascript
function findOldestUser(users) {
  let result = users[0];

  for (let i = 0; i < users.length; i++) {
    let user = users[i];

    if (user.age > result.age) {
      result = user;
    }
  }

  return result;
}
// ```

const users = [
  {
    name: "Imam",
    age: 24,
  },
  {
    name: "Andi",
    age: 31,
  },
  {
    name: "Budi",
    age: 27,
  },
  {
    name: "imam",
    age: 47,
  },
];

console.log(findOldestUser(users));
// Output:

// ```javascript
// {
//   name: "imam",
//   age: 47
// }
// ```

// Fokus: array object, current best value.

// ---

// ### 8. Hitung Jumlah Kata
// Buat function:

// ```javascript
function countWords(text) {
  let result = text.split(" ");
  let count = 0;

  for (let i = 0; i < result.length; i++) {
    if (result[i] !== "") {
      count++;
    }
  }
  return count;
}
// ```

// Contoh:

console.log(countWords("saya sedang belajar javascript"));
console.log(countWords("saya   belajar javascript"));

// Output:

// ```text
// 4
// ```

// Untuk soal ini boleh pakai:

// ```javascript
// .split(" ")
// ```

// Bonus: coba handle spasi lebih dari satu.

// Contoh:

// ```javascript
// countWords("saya   belajar javascript")
// ```

// Output tetap:

// ```text
// 3
// ```

// Fokus: string manipulation dan edge case.

// ---

// ### 9. Group Produk Berdasarkan Kategori
// Diberikan:

// ```javascript

// ```

// Buat function:

// ```javascript
function groupByCategory(products) {
  let result = {};

  for (let i = 0; i < products.length; i++) {
    let product = products[i];

    if (!result[product.category]) {
      result[product.category] = [];
    }
    result[product.category].push(product.name);
  }

  return result;
  // code here
}
// ```

const products = [
  {
    name: "pants",
    category: "fashion",
  },
  {
    name: "Laptop",
    category: "electronics",
  },
  {
    name: "Mouse",
    category: "electronics",
  },
  {
    name: "Shirt",
    category: "fashion",
  },
  {
    name: "Shoes",
    category: "fashion",
  },
];
console.log(groupByCategory(products));
// Output:

// ```javascript
// {
//   electronics: ["Laptop", "Mouse"],
//   fashion: ["Shirt", "Shoes"]
// }
// ```

// Hint:

// ```javascript
// const result = {};

// if (!result[category]) {
//   result[category] = [];
// }
// ```

// Fokus: object + array di dalam object.

// ---

// ### 10. Hitung Total Transaksi per User
// Diberikan:

// ```javascript

// ```

// Buat function:

// ```javascript
function calculateTotalByUser(transactions) {
    let result = {}

    for(let i = 0 ; i<transactions.length;i++){
        let transaction = transactions[i]
        if(result[transaction.user]){
            result[transaction.user] += transaction.amount
        }else{
            result[transaction.user] = transaction.amount
        }
    }
return result
}
const transactions = [
  {
    user: "Imam",
    amount: 100000
  },
  {
    user: "Andi",
    amount: 50000
  },
  {
    user: "Imam",
    amount: 75000
  },
  {
    user: "Budi",
    amount: 30000
  },
  {
    user: "Andi",
    amount: 100000
  }
];
console.log(calculateTotalByUser(transactions))

// ```

// Output:

// ```javascript
// {
//   Imam: 175000,
//   Andi: 150000,
//   Budi: 30000
// }
// ```

// Fokus: object accumulator.

// Pattern yang akan sangat berguna:

// ```javascript
// if (result[user]) {
//   // tambah amount
// } else {
//   // isi amount pertama
// }
// ```

// ## Urutan tingkat kesulitannya

// Menurutku:

// **Pemanasan**
// `1 → 7 → 8`

// **Level 3 normal**
// `2 → 3 → 6`

// **Mulai interview pattern**
// `4 → 5 → 9 → 10`

// Nomor **4, 5, 9, dan 10** paling penting karena semuanya melatih penggunaan object sebagai **hash map**, yang bakal sering muncul di coding assessment.

// Kerjakan sebisanya tanpa lihat solusi. Kalau mentok, kirim nomor dan kode terakhir kamu, nanti aku kasih **hint saja dulu**, bukan langsung jawaban.
