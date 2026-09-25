Siap. Level 3 kita naikkan ke pattern yang lebih mirip coding assessment/interview, tapi tetap pakai JavaScript dasar dan belum perlu syntax fancy.

## 10 Soal JavaScript Logic — Level 3

### 1. Cek Palindrome
Buat function:

```javascript
function isPalindrome(text) {
  // code here
}
```

Contoh:

```javascript
isPalindrome("katak")
```

Output:

```text
true
```

```javascript
isPalindrome("hello")
```

Output:

```text
false
```

Untuk sekarang, anggap input hanya huruf kecil tanpa spasi.

Fokus: string, loop, reverse logic, comparison.

---

### 2. Cari Angka Terbesar Kedua
Buat function:

```javascript
function findSecondLargest(numbers) {
  // code here
}
```

Input:

```javascript
[10, 5, 8, 20, 15]
```

Output:

```text
15
```

Jangan pakai:

```javascript
.sort()
```

Anggap semua angka berbeda.

Fokus: menyimpan `largest` dan `secondLargest`.

---

### 3. Hapus Duplicate Secara Manual
Buat function:

```javascript
function removeDuplicates(numbers) {
  // code here
}
```

Input:

```javascript
[1, 2, 2, 3, 1, 4]
```

Output:

```javascript
[1, 2, 3, 4]
```

Jangan pakai:

```javascript
Set
```

Boleh pakai nested loop.

Fokus: array baru, duplicate checking, `push()`.

---

### 4. Cari Angka yang Paling Sering Muncul
Buat function:

```javascript
function mostFrequentNumber(numbers) {
  // code here
}
```

Input:

```javascript
[1, 2, 2, 3, 2, 4, 3]
```

Output:

```text
2
```

Gunakan object sebagai counter.

Hint pattern:

```javascript
const count = {};
```

Lalu cari value terbesar dari object tersebut.

Fokus: frequency map + mencari nilai terbesar.

---

### 5. Cek Anagram
Dua kata disebut anagram kalau punya huruf yang sama dengan jumlah yang sama.

Buat function:

```javascript
function isAnagram(word1, word2) {
  // code here
}
```

Contoh:

```javascript
isAnagram("listen", "silent")
```

Output:

```text
true
```

```javascript
isAnagram("hello", "world")
```

Output:

```text
false
```

Jangan pakai:

```javascript
.sort()
```

Fokus: frequency object.

---

### 6. Two Sum — Brute Force
Buat function:

```javascript
function twoSum(numbers, target) {
  // code here
}
```

Input:

```javascript
twoSum([2, 7, 11, 15], 9)
```

Output:

```javascript
[0, 1]
```

Karena:

```text
numbers[0] + numbers[1]
2 + 7 = 9
```

Untuk sekarang gunakan nested loop.

Fokus: nested loop, index, return array.

---

### 7. Cari User Paling Tua
Diberikan:

```javascript
const users = [
  {
    name: "Imam",
    age: 24
  },
  {
    name: "Andi",
    age: 31
  },
  {
    name: "Budi",
    age: 27
  }
];
```

Buat function:

```javascript
function findOldestUser(users) {
  // code here
}
```

Output:

```javascript
{
  name: "Andi",
  age: 31
}
```

Fokus: array object, current best value.

---

### 8. Hitung Jumlah Kata
Buat function:

```javascript
function countWords(text) {
  // code here
}
```

Contoh:

```javascript
countWords("saya sedang belajar javascript")
```

Output:

```text
4
```

Untuk soal ini boleh pakai:

```javascript
.split(" ")
```

Bonus: coba handle spasi lebih dari satu.

Contoh:

```javascript
countWords("saya   belajar javascript")
```

Output tetap:

```text
3
```

Fokus: string manipulation dan edge case.

---

### 9. Group Produk Berdasarkan Kategori
Diberikan:

```javascript
const products = [
  {
    name: "Laptop",
    category: "electronics"
  },
  {
    name: "Mouse",
    category: "electronics"
  },
  {
    name: "Shirt",
    category: "fashion"
  },
  {
    name: "Shoes",
    category: "fashion"
  }
];
```

Buat function:

```javascript
function groupByCategory(products) {
  // code here
}
```

Output:

```javascript
{
  electronics: ["Laptop", "Mouse"],
  fashion: ["Shirt", "Shoes"]
}
```

Hint:

```javascript
const result = {};

if (!result[category]) {
  result[category] = [];
}
```

Fokus: object + array di dalam object.

---

### 10. Hitung Total Transaksi per User
Diberikan:

```javascript
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
```

Buat function:

```javascript
function calculateTotalByUser(transactions) {
  // code here
}
```

Output:

```javascript
{
  Imam: 175000,
  Andi: 150000,
  Budi: 30000
}
```

Fokus: object accumulator.

Pattern yang akan sangat berguna:

```javascript
if (result[user]) {
  // tambah amount
} else {
  // isi amount pertama
}
```

## Urutan tingkat kesulitannya

Menurutku:

**Pemanasan**
`1 → 7 → 8`

**Level 3 normal**
`2 → 3 → 6`

**Mulai interview pattern**
`4 → 5 → 9 → 10`

Nomor **4, 5, 9, dan 10** paling penting karena semuanya melatih penggunaan object sebagai **hash map**, yang bakal sering muncul di coding assessment.

Kerjakan sebisanya tanpa lihat solusi. Kalau mentok, kirim nomor dan kode terakhir kamu, nanti aku kasih **hint saja dulu**, bukan langsung jawaban.