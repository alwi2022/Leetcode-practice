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
console.log(twoSum([3, 2, 4, 6], 9));
// ```

// Output:

// ```javascript
// [1, 2]
// ```

// ---

// # C. SQL — 5 soal

// Gunakan tabel berikut.

// ```text
// users
// -----
// id
// name
// email
// ```

// ```text
// orders
// ------
// id
// user_id
// total_amount
// status
// created_at
// ```

// ### 11. Ambil semua order completed
// Tulis query untuk mengambil semua data dari `orders` yang:

// ```text
// status = 'completed'
// ```

// ---

// ### 12. Hitung jumlah order completed
// Output:

// ```text
// total_orders
// ```

// Gunakan `COUNT`.

// ---

// ### 13. Total pengeluaran per user
// Tampilkan:

// ```text
// user_id
// total_spent
// ```

// Hanya order `completed`.

// Gunakan:

// ```text
// GROUP BY
// SUM
// ```

// ---

// ### 14. Join users dan orders
// Tampilkan:

// ```text
// name
// total_amount
// status
// ```

// Gabungkan `users` dan `orders`.

// ---

// ### 15. User dengan total spending di atas 500000
// Tampilkan:

// ```text
// name
// total_spent
// ```

// Hanya hitung completed order.

// Hanya tampilkan user yang:

// ```text
// total_spent > 500000
// ```

// ---

// # D. Backend Logic — 5 soal

// Sekarang masuk ke pola yang dekat dengan kerja Fullstack.

// ### 16. Validasi Create User

// Buat function:

// ```javascript
// function createUser(name, email) {
//   // code here
// }
// ```

// Aturan:

// Jika `name` kosong:

// ```javascript
// {
//   success: false,
//   message: "Name is required"
// }
// ```

// Jika `email` kosong:

// ```javascript
// {
//   success: false,
//   message: "Email is required"
// }
// ```

// Kalau valid:

// ```javascript
// {
//   success: true,
//   user: {
//     name: "Imam",
//     email: "imam@mail.com"
//   }
// }
// ```

// ---

// ### 17. Update Stock

// ```javascript
// function reduceStock(product, quantity) {
//   // code here
// }
// ```

// Input:

// ```javascript
// {
//   name: "Serum",
//   stock: 10
// }
// ```

// quantity:

// ```text
// 3
// ```

// Output:

// ```javascript
// {
//   name: "Serum",
//   stock: 7
// }
// ```

// Kalau stock tidak cukup:

// ```text
// "Insufficient stock"
// ```

// ---

// ### 18. Buat Order

// ```javascript
// function createOrder(product, quantity) {
//   // code here
// }
// ```

// Product:

// ```javascript
// {
//   id: 1,
//   name: "Serum",
//   price: 150000,
//   stock: 5
// }
// ```

// quantity:

// ```text
// 2
// ```

// Output:

// ```javascript
// {
//   productId: 1,
//   productName: "Serum",
//   quantity: 2,
//   totalPrice: 300000,
//   remainingStock: 3
// }
// ```

// ---

// ### 19. Filter Order Completed Secara Manual

// ```javascript
// function getCompletedOrders(orders) {
//   // code here
// }
// ```

// Input:

// ```javascript
// [
//   { id: 1, status: "completed" },
//   { id: 2, status: "pending" },
//   { id: 3, status: "completed" }
// ]
// ```

// Output:

// ```javascript
// [
//   { id: 1, status: "completed" },
//   { id: 3, status: "completed" }
// ]
// ```

// Jangan pakai `.filter()` dulu.

// ---

// ### 20. Ringkasan Order

// Buat:

// ```javascript
// function orderSummary(orders) {
//   // code here
// }
// ```

// Input:

// ```javascript
// [
//   {
//     status: "completed",
//     amount: 100000
//   },
//   {
//     status: "pending",
//     amount: 50000
//   },
//   {
//     status: "completed",
//     amount: 200000
//   },
//   {
//     status: "cancelled",
//     amount: 75000
//   }
// ]
// ```

// Output:

// ```javascript
// {
//   totalOrders: 4,
//   completedOrders: 2,
//   totalCompletedAmount: 300000
// }
// ```

// ---

// Kalau mau pakai format latihan yang efektif:

// **Kerjakan 1–5 dulu → kirim ke aku → aku review.**
// Lalu lanjut **6–10**, baru **SQL 11–15**, terakhir **backend 16–20**.

// Untuk soal 6–10, jangan cari solusi LeetCode dulu. Kalau mentok, bilang nomornya dan aku kasih **hint satu langkah**, bukan jawaban penuh.
