Oke. Kali ini aku bikin **10 soal Level 3 lagi tanpa hint sama sekali**, formatnya lebih mirip coding assessment. Pakai **JavaScript biasa** dan usahakan jangan lihat solusi luar dulu.

## JavaScript Logic Level 3 — Set 2

### 1. Cari Selisih Terbesar
Buat function:

```javascript
function maxDifference(numbers) {
  // code here
}
```

Input:

```javascript
[10, 3, 20, 8]
```

Output:

```text
17
```

Karena angka terbesar `20` dan terkecil `3`.

Jangan pakai:

```javascript
Math.max()
Math.min()
```

---

### 2. Hitung Huruf yang Paling Sering Muncul

Buat function:

```javascript
function mostFrequentCharacter(text) {
  // code here

}
```

Input:

```javascript
"javascript"
```

Output:

```text
"a"
```

Kalau ada frekuensi yang sama, kembalikan huruf yang muncul lebih dulu.

---

### 3. Cari Produk Termahal

Diberikan:

```javascript
const products = [
  {
    name: "Keyboard",
    price: 350000
  },
  {
    name: "Mouse",
    price: 150000
  },
  {
    name: "Monitor",
    price: 2000000
  },
  {
    name: "Headset",
    price: 500000
  }
];
```

Buat:

```javascript
function findMostExpensiveProduct(products) {
  // code here
}
```

Output:

```javascript
{
  name: "Monitor",
  price: 2000000
}
```

---

### 4. Hitung Jumlah Angka Unik

Buat function:

```javascript
function countUnique(numbers) {
  // code here
}
```

Input:

```javascript
[1, 2, 2, 3, 4, 4, 4]
```

Output:

```text
4
```

Karena angka uniknya:

```text
1
2
3
4
```

Jangan pakai `Set`.

---

### 5. Cari First Duplicate

Buat function:

```javascript
function findFirstDuplicate(numbers) {
  // code here
}
```

Input:

```javascript
[3, 1, 4, 2, 1, 3]
```

Output:

```text
1
```

Kalau tidak ada duplicate:

```javascript
findFirstDuplicate([1, 2, 3, 4])
```

Output:

```text
null
```

---

### 6. Cek Apakah Dua Array Sama

Buat function:

```javascript
function isSameArray(arr1, arr2) {
  // code here
}
```

Contoh:

```javascript
isSameArray([1, 2, 3], [1, 2, 3])
```

Output:

```text
true
```

Contoh:

```javascript
isSameArray([1, 2, 3], [3, 2, 1])
```

Output:

```text
false
```

Urutan harus sama.

---

### 7. Hitung Total Quantity per Product

Diberikan:

```javascript
const orders = [
  {
    product: "Serum",
    quantity: 2
  },
  {
    product: "Toner",
    quantity: 1
  },
  {
    product: "Serum",
    quantity: 3
  },
  {
    product: "Cleanser",
    quantity: 2
  },
  {
    product: "Toner",
    quantity: 4
  }
];
```

Buat:

```javascript
function totalQuantityByProduct(orders) {
  // code here
}
```

Output:

```javascript
{
  Serum: 5,
  Toner: 5,
  Cleanser: 2
}
```

---

### 8. Cari User dengan Total Transaction Terbesar

Diberikan:

```javascript
const transactions = [
  {
    user: "Imam",
    amount: 100000
  },
  {
    user: "Andi",
    amount: 200000
  },
  {
    user: "Imam",
    amount: 150000
  },
  {
    user: "Budi",
    amount: 50000
  },
  {
    user: "Andi",
    amount: 100000
  }
];
```

Buat:

```javascript
function topSpender(transactions) {
  // code here
}
```

Output:

```javascript
{
  user: "Andi",
  total: 300000
}
```

---

### 9. Pisahkan Genap dan Ganjil

Buat function:

```javascript
function separateEvenOdd(numbers) {
  // code here
}
```

Input:

```javascript
[1, 2, 3, 4, 5, 6]
```

Output:

```javascript
{
  even: [2, 4, 6],
  odd: [1, 3, 5]
}
```

---

### 10. Cari Kata Terpanjang dalam Kalimat

Buat:

```javascript
function findLongestWord(sentence) {
  // code here
}
```

Input:

```javascript
"saya sedang belajar javascript dasar"
```

Output:

```text
"javascript"
```

Kalau ada dua kata dengan panjang sama, ambil yang muncul lebih dulu.

---

Untuk set ini aku sengaja nggak kasih hint karena tujuannya melihat apakah pattern yang kemarin sudah nempel.

Kalau mau urutan pengerjaan yang enak: **3 → 6 → 9 → 1 → 10 → 4 → 5 → 2 → 7 → 8**.

Kirim semua jawabanmu sekaligus seperti tadi, nanti aku review dengan fokus ke **logic, edge case, dan kemungkinan automated test gagal**.
