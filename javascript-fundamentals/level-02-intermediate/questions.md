Siap. Aku bagi jadi **2 bagian**: 5 soal basic yang polanya mirip dengan tadi tapi use case berbeda, lalu 5 soal **Level 2** yang mulai masuk pattern sedikit lebih kompleks.

## 5 Soal JavaScript Basic Logic

### 1. Cek Lulus atau Tidak
Buat function:

```javascript
function checkPassed(score) {
  // code here
}
```

Aturan:
- Jika `score >= 75`, return `"Lulus"`
- Jika kurang dari 75, return `"Tidak Lulus"`

Contoh:

```javascript
checkPassed(80)
```

Output:

```text
"Lulus"
```

```javascript
checkPassed(60)
```

Output:

```text
"Tidak Lulus"
```

Fokus: `if/else`, number, comparison.

---

### 2. Cari Harga Termurah
Buat function:

```javascript
function findCheapest(prices) {
  // code here
}
```

Input:

```javascript
[12000, 5000, 18000, 9000]
```

Output:

```text
5000
```

Jangan pakai:

```javascript
Math.min()
```

Fokus: `for`, array, comparison.

---

### 3. Hitung Jumlah Huruf `"a"`
Buat function:

```javascript
function countLetterA(text) {
  // code here
}
```

Contoh:

```javascript
countLetterA("javascript dasar")
```

Output:

```text
4
```

Fokus: string, `for`, `if`.

---

### 4. Hitung Total Nilai
Diberikan:

```javascript
const scores = [80, 70, 90, 60];
```

Buat function:

```javascript
function calculateScoreTotal(scores) {
  // code here
}
```

Output:

```text
300
```

Fokus: array, number, `for`.

---

### 5. Cari Produk Berdasarkan ID
Diberikan:

```javascript
const products = [
  {
    id: 1,
    name: "Keyboard",
    price: 350000
  },
  {
    id: 2,
    name: "Mouse",
    price: 150000
  },
  {
    id: 3,
    name: "Monitor",
    price: 2000000
  }
];
```

Buat function:

```javascript
function findProduct(products, id) {
  // code here
}
```

Kalau:

```javascript
findProduct(products, 2)
```

Output:

```javascript
{
  id: 2,
  name: "Mouse",
  price: 150000
}
```

Kalau tidak ditemukan:

```text
"Product not found"
```

Fokus: array, object, `for`, `if`, `return`.

---

# Level 2

### 6. Balik Sebuah String
Buat function:

```javascript
function reverseText(text) {
  // code here
}
```

Contoh:

```javascript
reverseText("hello")
```

Output:

```text
"olleh"
```

Jangan pakai:

```javascript
.split("").reverse().join("")
```

Coba buat manual pakai `for`.

Fokus: string, loop, membangun value baru.

---

### 7. Hitung Berapa Angka Genap
Buat function:

```javascript
function countEvenNumbers(numbers) {
  // code here
}
```

Input:

```javascript
[1, 2, 4, 7, 8, 11]
```

Output:

```text
3
```

Karena angka genap:

```text
2
4
8
```

Fokus: array, `%`, counter.

---

### 8. Ambil Hanya Angka Positif
Buat function:

```javascript
function getPositiveNumbers(numbers) {
  // code here
}
```

Input:

```javascript
[-3, 5, 0, -10, 8, 2]
```

Output:

```javascript
[5, 8, 2]
```

Jangan pakai `.filter()` dulu.

Fokus: buat array baru, `push()`, condition.

---

### 9. Cek Apakah Ada Duplicate
Buat function:

```javascript
function hasDuplicate(numbers) {
  // code here
}
```

Contoh:

```javascript
hasDuplicate([1, 2, 3, 4])
```

Output:

```text
false
```

Contoh:

```javascript
hasDuplicate([1, 2, 3, 2])
```

Output:

```text
true
```

Untuk sekarang, boleh pakai **nested loop**.

Contoh pola:

```javascript
for (...) {
  for (...) {
  }
}
```

Belum perlu `Set`.

Fokus: membandingkan satu item dengan item lainnya.

---

### 10. Hitung Frekuensi Setiap Buah
Buat function:

```javascript
function countFruits(fruits) {
  // code here
}
```

Input:

```javascript
[
  "apple",
  "banana",
  "apple",
  "orange",
  "banana",
  "apple"
]
```

Output:

```javascript
{
  apple: 3,
  banana: 2,
  orange: 1
}
```

Fokus: object sebagai penyimpanan counter.

Pattern yang ingin kamu pelajari:

```javascript
const result = {};

if (result[item]) {
  // ...
} else {
  // ...
}
```

---

Urutan yang aku sarankan:

**1 → 2 → 3 → 4 → 5** harus relatif cepat.

Kemudian **6 → 7 → 8** masih cukup straightforward.

**9 dan 10** mulai penting banget karena dari situ kamu masuk ke pola coding interview seperti duplicate detection dan frequency counting.

Kalau nanti kamu sudah kerjakan 10 ini, kirim semuanya seperti tadi. Aku bisa review satu per satu dan kasih tahu **logic mana yang sudah kuat dan mana yang masih perlu dilatih**.