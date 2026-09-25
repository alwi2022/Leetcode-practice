Siap. Ini 5 soal **JavaScript basic logic** dari gampang ke sedikit lebih menantang. Jangan lihat solusi dulu; kerjakan satu per satu.

### 1. Cek Ganjil atau Genap
Buat function:

```javascript
function checkNumber(number) {
  // code here
}
```

Contoh:

```javascript
checkNumber(10)
```

Output:

```text
"Genap"
```

```javascript
checkNumber(7)
```

Output:

```text
"Ganjil"
```

Fokus: `if/else`, number, operator `%`.

---

### 2. Cari Angka Terbesar
Buat function:

```javascript
function findLargest(numbers) {
  // code here
}
```

Input:

```javascript
[4, 12, 7, 25, 9]
```

Output:

```text
25
```

Jangan pakai:

```javascript
Math.max()
```

Fokus: `for`, array, comparison.

---

### 3. Hitung Jumlah Huruf Vokal
Buat function:

```javascript
function countVowels(text) {
  // code here
}
```

Contoh:

```javascript
countVowels("javascript")
```

Output:

```text
3
```

Karena:

```text
a
a
i
```

Anggap huruf vokal adalah:

```text
a, i, u, e, o
```

Fokus: string, `for`, `if`.

---

### 4. Hitung Total Belanja
Diberikan:

```javascript
const cart = [
  {
    name: "Serum",
    price: 150000,
    quantity: 2
  },
  {
    name: "Toner",
    price: 100000,
    quantity: 1
  },
  {
    name: "Cleanser",
    price: 75000,
    quantity: 2
  }
];
```

Buat function:

```javascript
function calculateTotal(cart) {

  // code here
}
```

Output:

```text
550000
```

Perhitungannya:

```text
150000 × 2 = 300000
100000 × 1 = 100000
75000 × 2  = 150000

Total = 550000
```

Fokus: array, object, number, `for`.

---


<!-- ### 5. Cari User Berdasarkan ID -->
Diberikan:

```javascript
const users = [
  {
    id: 1,
    name: "Imam",
    age: 24
  },
  {
    id: 2,
    name: "Andi",
    age: 27
  },
  {
    id: 3,
    name: "Budi",
    age: 22
  }
];
```

Buat function:

```javascript
function findUser(users, id) {
  // code here
}
```

Kalau:

```javascript
findUser(users, 2)
```

Output:

```javascript
{
  id: 2,
  name: "Andi",
  age: 27
}
```

Kalau:

```javascript
findUser(users, 10)
```

Output:

```text
"User not found"
```

Fokus: function, array, object, `for`, `if`, `return`.

Kerjakan **nomor 1 dulu** dan kirim kodenya ke aku. Aku review tanpa langsung kasih jawaban kecuali kamu minta.
