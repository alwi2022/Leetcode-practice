function checkNumber(number) {
  if (number % 2 === 0) {
    return "genap";
  } else {
    return "ganjil";
  }
}

console.log(checkNumber(6));
console.log(checkNumber(11));
console.log(checkNumber(7));

// ### 2. Cari Angka Terbesar
// Buat function:

// ```javascript
// function findLargest(numbers) {
//   // code here
// }
// ```;
// Input: ```javascript
// [4, 12, 7, 25, 9]
// ```;

// Output: ```text
// 25
// ```
// // Jangan pakai:

// ```javascript
// Math.max()
// ```;

// Fokus: (`for`, array, comparison);

// function findLargest(numbers) {
//   let max = numbers[0];
//   for (let i = 0; i < numbers.length; i++) {
//     const nums = numbers[i];
//     if (nums > max) {
//       max = nums;
//     }
//   }
//   return max;
// }

// console.log(findLargest([4, 12, 7, 25, 9]));

// function findLargest(numbers) {
//   let max = -Infinity;
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > max) {
//       max = numbers[i];
//     }
//   }
//   return max;
// }

// console.log(findLargest([4, 12, 7, 25, 9]));

// ### 3. Hitung Jumlah Huruf Vokal
// Buat function:

// ```javascript
// function countVowels(text) {
//   // code here
// }
// ```

// Contoh:

// ```javascript
// countVowels("javascript")
// ```

// Output:

// ```text
// 3
// ```

// Karena:

// ```text
// a
// a
// i
// ```

// Anggap huruf vokal adalah:

// ```text
// a, i, u, e, o
// ```

// Fokus: string, `for`, `if`.

// function countVowels(text) {
//   let result = 0;
//   for (let i = 0; i < text.length; i++) {
//     let temp = text[i].toLowerCase();

//     if (temp === "a") {
//       result++;
//     } else if (temp === "i") {
//       result++;
//     } else if (temp === "u") {
//       result++;
//     } else if (temp === "e") {
//       result++;
//     } else if (temp === "o") {
//       result++;
//     }
//   }
//   return result;
// }

// function countVowels(text) {
//   let result = 0;
//   for (let i = 0; i < text.length; i++) {
//     if (
//       text[i] === "a" ||
//       text[i] === "i" ||
//       text[i] === "u" ||
//       text[i] === "e" ||
//       text[i] === "o"
//     ) {
//       result++;
//     }
//   }
//   return result;
// }

// console.log(countVowels("imambahrialwi"));

// ---

// ### 4. Hitung Total Belanja
// Diberikan:

// ```

// Buat function:

function calculateTotal(cart) {
  let result = 0;

  for (let i = 0; i < cart.length; i++) {
    const temp = cart[i];
    result += temp.price * temp.quantity;
  }

  return result;
}

// ```javascript
const cart = [
  {
    name: "Serum",
    price: 150000,
    quantity: 2,
  },
  {
    name: "Toner",
    price: 100000,
    quantity: 1,
  },
  {
    name: "Cleanser",
    price: 75000,
    quantity: 2,
  },
];
console.log(calculateTotal(cart));

// Output:

// ```text
// 550000
// ```

// Perhitungannya:

// ```text
// 150000 × 2 = 300000
// 100000 × 1 = 100000
// 75000 × 2  = 150000

// Total = 550000
// ```

// Fokus: array, object, number, `for`.

// ---

// <!-- ### 5. Cari User Berdasarkan ID -->
// Diberikan:

// ```javascript
// const users = [
//   {
//     id: 1,
//     name: "Imam",
//     age: 24
//   },
//   {
//     id: 2,
//     name: "Andi",
//     age: 27
//   },
//   {
//     id: 3,
//     name: "Budi",
//     age: 22
//   }
// ];
// ```

// Buat function:

// ```javascript
// function findUser(users, id) {
//   // code here
// }
// ```

// Kalau:

// ```javascript
// findUser(users, 2)
// ```

// Output:

// ```javascript
// {
//   id: 2,
//   name: "Andi",
//   age: 27
// }
// ```

// Kalau:

// ```javascript
// findUser(users, 10)
// ```

// Output:

// ```text
// "User not found"
// ```

function findUser(users, id) {
  for (let i = 0; i < users.length; i++) {
    const arr = users[i];
    // console.log(arr,);
    if (arr.id === id) {
      return arr;
    }
  }

  return "user not found"
}

const users = [
  {
    id: 1,
    name: "Imam",
    age: 24,
  },
  {
    id: 2,
    name: "Andi",
    age: 27,
  },
  {
    id: 3,
    name: "Budi",
    age: 22,
  },
];
console.log(findUser(users, 4));
