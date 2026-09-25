// ### 1. Cek Lulus atau Tidak
// Buat function:

// ```javascript
// function checkPassed(score) {
//   // code here
// }
// ```

// Aturan:
// - Jika `score >= 75`, return `"Lulus"`
// - Jika kurang dari 75, return `"Tidak Lulus"`

// Contoh:

// ```javascript
// checkPassed(80)
// ```

// Output:

// ```text
// "Lulus"
// ```

// ```javascript
// checkPassed(60)
// ```

// Output:

// ```text
// "Tidak Lulus"
// ```

// Fokus: `if/else`, number, comparison.

// ---

function checkPassed(score) {
  if (score >= 75) {
    return "lulus";
  } else {
    return "tidak lulus";
  }
}

console.log(checkPassed(75));

// ### 2. Cari Harga Termurah
// Buat function:

// ```javascript
// function findCheapest(prices) {
//   // code here
// }
// ```

// Input:

// ```javascript
// [12000, 5000, 18000, 9000]
// ```

// Output:

// ```text
// 5000
// ```

// Jangan pakai:

// ```javascript
// Math.min()
// ```

// Fokus: `for`, array, comparison.

// ---

// function findCheapest(prices) {
//   let min = Infinity;

//   for (let i = 0; i < prices.length; i++) {
//     const price = prices[i];
//     if (price < min) {
//       min = price;
//     }
//   }
//   return min;
// }

function findCheapest(prices) {
  let result = prices[0];

  for (let i = 0; i < prices.length; i++) {
    const price = prices[i];
    if (price < result) {
      result = price;
    }
  }

  return result;
}

console.log(findCheapest([12000, 5000, 18000, 9000, 20]));

// ### 3. Hitung Jumlah Huruf `"a"`
// Buat function:

// ```javascript
// function countLetterA(text) {
//   // code here
// }
// ```

// Contoh:

// ```javascript
// countLetterA("javascript dasar")
// ```

// Output:

// ```text
// 4
// ```

// Fokus: string, `for`, `if`.

// ---

function countLetterA(text) {
  let result = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === "a") {
      result++;
    }
  }

  return result;
}

console.log(countLetterA("javascript dasar aa"));

// ### 4. Hitung Total Nilai
// Diberikan:

// ```javascript
// const scores = [80, 70, 90, 60];
// ```

// Buat function:

// ```javascript
// function calculateScoreTotal(scores) {
//   // code here
// }
// ```

// Output:

// ```text
// 300
// ```

// Fokus: array, number, `for`.

// ---

function calculateScoreTotal(scores) {
  let result = 0;
  for (let i = 0; i < scores.length; i++) {
    const score = scores[i];
    result += score;
  }

  return result;
}

console.log(calculateScoreTotal([80, 70, 90, 60, 50]));

// ### 5. Cari Produk Berdasarkan ID
// Diberikan:

// ```javascript
// const products = [
//   {
//     id: 1,
//     name: "Keyboard",
//     price: 350000
//   },
//   {
//     id: 2,
//     name: "Mouse",
//     price: 150000
//   },
//   {
//     id: 3,
//     name: "Monitor",
//     price: 2000000
//   }
// ];
// ```

// Buat function:

// ```javascript
// function findProduct(products, id) {
//   // code here
// }
// ```

// Kalau:

// ```javascript
// findProduct(products, 2)
// ```

// Output:

// ```javascript
// {
//   id: 2,
//   name: "Mouse",
//   price: 150000
// }
// ```

// Kalau tidak ditemukan:

// ```text
// "Product not found"
// ```

// Fokus: array, object, `for`, `if`, `return`.

// ---

function findProductById(products, id) {
  for (let i = 0; i < products.length; i++) {
    let product = products[i];
    if (product.id === id) {
      return product;
    }
  }

  return "Product not found";
}
const products = [
  {
    id: 1,
    name: "Keyboard",
    price: 350000,
  },
  {
    id: 2,
    name: "Mouse",
    price: 150000,
  },
  {
    id: 3,
    name: "Monitor",
    price: 2000000,
  },
];
console.log(findProductById(products, 4));

// # Level 2

// ### 6. Balik Sebuah String
// Buat function:

// ```javascript
// function reverseText(text) {
//   // code here
// }
// ```

// Contoh:

// ```javascript
// reverseText("hello")
// ```

// Output:

// ```text
// "olleh"
// ```

// Jangan pakai:

// ```javascript
// .split("").reverse().join("")
// ```

// Coba buat manual pakai `for`.

// Fokus: string, loop, membangun value baru.

// ---

function reverseText(text) {
  let result = "";
  for (let i = text.length - 1; i >= 0; i--) {
    let temp = text[i];
    result += temp;
    // console.log(result);
  }

  return result;
}

console.log(reverseText("hello"));

// ---

// ### 7. Hitung Berapa Angka Genap
// Buat function:

// ```javascript
// function countEvenNumbers(numbers) {
//   // code here
// }
// ```

// Input:

// ```javascript
// [1, 2, 4, 7, 8, 11]
// ```

// Output:

// ```text
// 3
// ```

// Karena angka genap:

// ```text
// 2
// 4
// 8
// ```

// Fokus: array, `%`, counter.

// ---

function countEvenNumbers(numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    if (number % 2 == 0) {
      result += 1;
    }
  }

  return result;
}

console.log(countEvenNumbers([1, 2, 4, 7, 8, 11]));

// ---

// ### 8. Ambil Hanya Angka Positif
// Buat function:

// ```javascript
// function getPositiveNumbers(numbers) {
//   // code here
// }
// ```

// Input:

// ```javascript
// [-3, 5, 0, -10, 8, 2]
// ```

// Output:

// ```javascript
// [5, 8, 2]
// ```

// Jangan pakai `.filter()` dulu.

// Fokus: buat array baru, `push()`, condition.

// ---

function getPositiveNumbers(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (number > 0) {
      result.push(number);
    }
  }
  return result;
}

console.log(getPositiveNumbers([-3, 5, 0, -10, 8, 2]));

// ### 9. Cek Apakah Ada Duplicate
// Buat function:

// ```javascript
// function hasDuplicate(numbers) {
//   // code here
// }
// ```

// Contoh:

// ```javascript
// hasDuplicate([1, 2, 3, 4])
// ```

// Output:

// ```text
// false
// ```

// Contoh:

// ```javascript
// hasDuplicate([1, 2, 3, 2])
// ```

// Output:

// ```text
// true
// ```

// Untuk sekarang, boleh pakai **nested loop**.

// Contoh pola:

// ```javascript
// for (...) {
//   for (...) {
//   }
// }
// ```

// Belum perlu `Set`.

// Fokus: membandingkan satu item dengan item lainnya.

// ---

function hasDuplicate(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] === numbers[j]) {
        return true;
      }
    }
  }
  return false;
}

console.log(hasDuplicate([1, 2, 3, 4]));
console.log(hasDuplicate([1, 2, 3, 2]));

// ### 10. Hitung Frekuensi Setiap Buah
// Buat function:

// ```javascript
// function countFruits(fruits) {
//   // code here
// }
// ```

// Input:

// ```javascript
// [
//   "apple",
//   "banana",
//   "apple",
//   "orange",
//   "banana",
//   "apple"
// ]
// ```

// Output:

// ```javascript
// {
//   apple: 3,
//   banana: 2,
//   orange: 1
// }
// ```

// Fokus: object sebagai penyimpanan counter.

// Pattern yang ingin kamu pelajari:

// ```javascript
// const result = {};

// if (result[item]) {
//   // ...
// } else {
//   // ...
// }
// ```

// ---

function countFruits(fruits) {
  let result = {};
  for (let i = 0; i < fruits.length; i++) {
    let fruit = fruits[i];

    if (result[fruit]) {
      result[fruit]++;
    } else {
      result[fruit] = 1;
    }
  }

  return result;
}

console.log(
  countFruits(["apple", "banana", "apple", "orange", "banana", "apple"]),
);

// Siap. Ini 5 soal **Level 2** dulu untuk pemanasan. Masih fokus ke logic dasar, tapi sedikit lebih menantang dari sebelumnya.

// ### 1. Hitung Angka Negatif
// Buat function:

// ```javascript
// function countNegative(numbers) {
//   // code here
// }
// ```

// Input:

// ```javascript
// [-2, 5, -1, 7, -8, 3]
// ```

// Output:

// ```text
// 3
// ```

// Fokus: `for`, `if`, counter.

// ---

function countNegative(numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
      result++;
    }
  }
  return result;
}

console.log(countNegative([-2, 5, -1, 7, -8, 3]), "soal 1 ");

// ### 2. Cari Nama Terpanjang
// Buat function:

// ```javascript
// function findLongestName(names) {
//   // code here
// }
// ```

// Input:

// ```javascript
// ["Imam", "Andi", "Alexander", "Budi"]
// ```

// Output:

// ```text
// "Alexander"
// ```

// Kalau ada dua nama dengan panjang sama, ambil yang muncul lebih dulu.

// Fokus: string `.length`, array, comparison.

// ---

function findLongestName(names) {
  let result = names[0];

  for (let i = 0; i < names.length; i++) {
    let nama = names[i];

    if (nama.length > result.length) {
      result = nama;
    }
  }
  return result;
}

console.log(findLongestName(["Imam", "Alexander", "Jonathan"]), "soal 2");

// ### 3. Jumlahkan Hanya Angka Genap
// Buat function:

// ```javascript
// function sumEvenNumbers(numbers) {
//   // code here
// }
// ```

// Input:

// ```javascript
// [1, 2, 3, 4, 5, 6]
// ```

// Output:

// ```text
// 12
// ```

// Karena:

// ```text
// 2 + 4 + 6 = 12
// ```

// Fokus: `%`, accumulator, loop.

// ---

function sumEvenNumbers(numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];

    if (number % 2 === 0) {
      result += number;
    }
  }
  return result;
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6]), "jawaban soal nomor 3");

// ### 4. Cari Produk yang Stoknya Habis
// Diberikan:

// ```javascript
// const products = [
//   {
//     id: 1,
//     name: "Serum",
//     stock: 10
//   },
//   {
//     id: 2,
//     name: "Toner",
//     stock: 0
//   },
//   {
//     id: 3,
//     name: "Cleanser",
//     stock: 5
//   },
//   {
//     id: 4,
//     name: "Moisturizer",
//     stock: 0
//   }
// ];
// ```

// Buat function:

// ```javascript
// function getOutOfStockProducts(products) {
//   // code here
// }
// ```

// Output:

// ```javascript
// [
//   {
//     id: 2,
//     name: "Toner",
//     stock: 0
//   },
//   {
//     id: 4,
//     name: "Moisturizer",
//     stock: 0
//   }
// ]
// ```

// Jangan pakai `.filter()` dulu.

// Fokus: array baru, object, `push()`.

function getOutOfStockProducts(stocks) {
  let result = [];
  for (let i = 0; i < stocks.length; i++) {
    let product = stocks[i];
    if (product.stock === 0) {
      result.push(product);
    }
  }
  return result;
}

const items = [
  {
    id: 1,
    name: "Serum",
    stock: 10,
  },
  {
    id: 2,
    name: "Toner",
    stock: 0,
  },
  {
    id: 3,
    name: "Cleanser",
    stock: 5,
  },
  {
    id: 4,
    name: "Moisturizer",
    stock: 0,
  },
];
console.log(getOutOfStockProducts(items), "jawaban nomor 4");
// ---

// ### 5. Hitung Berapa Kali Huruf Tertentu Muncul
// Buat function:

// ```javascript
// function countCharacter(text, target) {
//   // code here
// }
// ```

// Contoh:

// ```javascript
// countCharacter("javascript", "a")
// ```

// Output:

// ```text
// 2
// ```

// Contoh:

// ```javascript
// countCharacter("banana", "n")
// ```

// Output:

// ```text
// 2
// ```

// Buat supaya **case-insensitive**.

// Contoh:

// ```javascript
// countCharacter("JavaScript", "j")
// ```

// Output:

// ```text
// 1
// ```

// Fokus: string, parameter function, `.toLowerCase()`, loop.

function countCharacter(text, target) {
  let result = 0;
  for (let i = 0; i < text.length; i++) {
    let temp = text[i];
    if (temp.toLowerCase() === target) {
      result++;
    }
  }
  return result;
}
console.log(countCharacter("baNana", "n"), "jawaban nomor 5");

// Kerjakan 5 ini dulu. Setelah kamu kirim jawabannya, aku review, lalu langsung aku naikkan ke **Level 3**.
