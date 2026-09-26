// Oke. Kali ini aku bikin **10 soal Level 3 lagi tanpa hint sama sekali**, formatnya lebih mirip coding assessment. Pakai **JavaScript biasa** dan usahakan jangan lihat solusi luar dulu.

// ## JavaScript Logic Level 3 — Set 2

// ### 1. Cari Selisih Terbesar
// Buat function:

// ```javascript
function maxDifference(numbers) {
  // code here
  let min = Infinity;
  let max = -Infinity;

  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    if (number > max) {
      max = number;
    }

    if (number < min) {
      min = number;
    }
  }
  return max - min;
}
// ```

// Input:

console.log(maxDifference([10, 3, 20, 8]));
// ```javascript
// [10, 3, 20, 8]
// ```

// Output:

// ```text
// 17
// ```

// Karena angka terbesar `20` dan terkecil `3`.

// Jangan pakai:

// ```javascript
// Math.max()
// Math.min()
// ```

// ---

// ### 2. Hitung Huruf yang Paling Sering Muncul

// Buat function:

// ```javascript
function mostFrequentCharacter(text) {
  // code here
  let result = {};

  for (let i = 0; i < text.length; i++) {
    let str = text[i];

    if (result[str]) {
      result[str] += 1;
    } else {
      result[str] = 1;
    }
  }
  let count = 0;
  let answer = "";
  for (let i = 0; i < text.length; i++) {
    let str = text[i];
    if (result[str] > count) {
      count = result[str];
      answer = str;
    }
  }

  return answer;
}
// ```

// Input:

console.log(mostFrequentCharacter("imambahrialwi"));

// ```javascript
// "javascript"
// ```

// Output:

// ```text
// "a"
// ```

// Kalau ada frekuensi yang sama, kembalikan huruf yang muncul lebih dulu.

// ---

// ### 3. Cari Produk Termahal

// Diberikan:

// ```javascript

// ```

// Buat:

// ```javascript
function findMostExpensiveProduct(products) {
  // code here
  let max = -Infinity;
  for (let i = 0; i < products.length; i++) {
    let product = products[i];

    if (product.price > max) {
      max = product.price;
    }
  }

  for (let i = 0; i < products.length; i++) {
    let product = products[i];

    if (product.price === max) {
      return product;
    }
  }
}
// ``
//

const products = [
  {
    name: "Keyboard",
    price: 350000,
  },
  {
    name: "Mouse",
    price: 150000,
  },
  {
    name: "Monitor",
    price: 2000000,
  },
  {
    name: "Headset",
    price: 50000000,
  },
];

console.log(findMostExpensiveProduct(products));
// Output:

// ```javascript
// {
//   name: "Monitor",
//   price: 2000000
// }
// ```

// ---

// ### 4. Hitung Jumlah Angka Unik

// Buat function:

// ```javascript
function countUnique(numbers) {
  // code here
  let result = {};
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    if (!result[number]) {
      result[number] = true
      count++
    }
  }
  return count

}
// ```

// Input:

console.log(countUnique([1, 2, 1, 2, 3, 4, 4, 8, 4]));

// ```javascript
// [1, 2, 2, 3, 4, 4, 4]
// ```

// Output:

// ```text
// 4
// ```

// Karena angka uniknya:

// ```text
// 1
// 2
// 3
// 4
// ```

// Jangan pakai `Set`.

// ---

// ### 5. Cari First Duplicate

// Buat function:

// ```javascript
function findFirstDuplicate(numbers) {
  let result = {};
  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];

    if (result[number]) {
      return number;
    }

    result[number] = true;
  }

  return null;
  // code here
}
// ```

// Input:

// ```javascript
console.log(findFirstDuplicate([3, 1, 2, 4, 2, 1, 3]));
// ```

// Output:

// ```text
// 1
// ```

// Kalau tidak ada duplicate:

// ```javascript
// findFirstDuplicate([1, 2, 3, 4])
// ```

// Output:

// ```text
// null
// ```

// ---

// ### 6. Cek Apakah Dua Array Sama

// Buat function:

// ```javascript
function isSameArray(arr1, arr2) {
  // code here
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true
}
// ```

console.log(isSameArray([1, 2, 3], [1, 2, 3]));
// Contoh:

// ```javascript
// isSameArray([1, 2, 3], [1, 2, 3])
// ```

// Output:

// ```text
// true
// ```

// Contoh:

// ```javascript
// isSameArray([1, 2, 3], [3, 2, 1])
// ```

// Output:

// ```text
// false
// ```

// Urutan harus sama.

// ---

// ### 7. Hitung Total Quantity per Product

// Diberikan:

// ```javascript
// const orders = [
//   {
//     product: "Serum",
//     quantity: 2
//   },
//   {
//     product: "Toner",
//     quantity: 1
//   },
//   {
//     product: "Serum",
//     quantity: 3
//   },
//   {
//     product: "Cleanser",
//     quantity: 2
//   },
//   {
//     product: "Toner",
//     quantity: 4
//   }
// ];
// ```

// Buat:

// ```javascript
function totalQuantityByProduct(orders) {
  let result = {};
  for (let i = 0; i < orders.length; i++) {
    let order = orders[i];

    if (result[order.product]) {
      result[order.product] += order.quantity;
    } else {
      result[order.product] = order.quantity;
    }
  }
  return result;
}
// ```
const orders = [
  {
    product: "Serum",
    quantity: 2,
  },
  {
    product: "Toner",
    quantity: 1,
  },
  {
    product: "Serum",
    quantity: 3,
  },
  {
    product: "Cleanser",
    quantity: 2,
  },
  {
    product: "Toner",
    quantity: 4,
  },
];
console.log(totalQuantityByProduct(orders));
// Output:

// ```javascript
// {
//   Serum: 5,
//   Toner: 5,
//   Cleanser: 2
// }
// ```

// ---

// ### 8. Cari User dengan Total Transaction Terbesar

// Diberikan:

``;

// Buat:

// ```javascript
function topSpender(transactions) {
  // code here
  let result = {};

  for (let i = 0; i < transactions.length; i++) {
    const transaction = transactions[i];
    // console.log(transaction)
    if (result[transaction.user]) {
      result[transaction.user] += transaction.amount;
    } else {
      result[transaction.user] = transaction.amount;
    }
  }

  let max = -Infinity;
  let jawaban;

  for (let user in result) {
    if (result[user] > max) {
      max = result[user];
      jawaban = user;
    }
  }

  return {
    user: jawaban,
    tptal: max,
  };
}
// ```

// Output:

const transactions = [
  {
    user: "Imam",
    amount: 100000,
  },
  {
    user: "Andi",
    amount: 200000,
  },
  {
    user: "Imam",
    amount: 150000,
  },
  {
    user: "Budi",
    amount: 50000,
  },
  {
    user: "Andi",
    amount: 100000,
  },
];

console.log(topSpender(transactions));
// ```javascript
// {
//   user: "Andi",
//   total: 300000
// }
// ```

// ---

// ### 9. Pisahkan Genap dan Ganjil

// Buat function:

// ```javascript
function separateEvenOdd(numbers) {
  let even = [];
  let odd = [];
  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    if (number % 2 === 0) {
      even.push(number);
    } else {
      odd.push(number);
    }
  }
  return {
    even,
    odd,
  };
}
// ```

// Input:
console.log(separateEvenOdd([1, 2, 3, 4, 5, 6]));

// ```javascript
//
// ```

// Output:

// ```javascript
// {
//   even: [2, 4, 6],
//   odd: [1, 3, 5]
// }
// ```

// ---

// ### 10. Cari Kata Terpanjang dalam Kalimat

// Buat:

// ```javascript
function findLongestWord(sentence) {
  // code here
  let max = -Infinity;
  let result = "";
  let str = sentence.split(" ");
  for (let i = 0; i < str.length; i++) {
    let temp = str[i];
    if (temp.length > max) {
      max = temp.length;
      result = temp;
    }
  }
  return result;
}
// ```

// Input:
console.log(findLongestWord("saya sedang belajar javascript dasar"));
// ```javascript
// "saya sedang belajar javascript dasar"
// ```

// Output:

// ```text
// "javascript"
// ```

// Kalau ada dua kata dengan panjang sama, ambil yang muncul lebih dulu.

// ---

// Untuk set ini aku sengaja nggak kasih hint karena tujuannya melihat apakah pattern yang kemarin sudah nempel.

// Kalau mau urutan pengerjaan yang enak: **3 → 6 → 9 → 1 → 10 → 4 → 5 → 2 → 7 → 8**.

// Kirim semua jawabanmu sekaligus seperti tadi, nanti aku review dengan fokus ke **logic, edge case, dan kemungkinan automated test gagal**.
