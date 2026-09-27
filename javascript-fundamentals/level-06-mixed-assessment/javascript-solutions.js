// 1. JavaScript Logic: Frequency dan Object
//
// Tugas:
// Buat function mostFrequentItem(items) yang mengembalikan item dengan
// frekuensi terbanyak.
//
// Ketentuan:
// - Jika beberapa item memiliki frekuensi sama, return item yang muncul
//   lebih dahulu.
// - Array kosong harus menghasilkan null.
//
// Input utama:
// ["serum", "toner", "serum", "cleanser", "toner", "serum"]
//
// Expected output:
// "serum"

function mostFrequentItem(items) {
  // Tulis solusi nomor 1 di sini.
  if (items.length === 0) {
    return null;
  }
  for (let i = 0; i < items.length; i++) {
    for (let j = i + 1; j < items.length; j++) {
      if (items[j] === items[i]) {
        return items[j];
      }
    }
  }
}

// Test case 1A:
console.log(
  mostFrequentItem(["serum", "toner", "serum", "cleanser", "toner", "serum"]),
);
// Expected output: "serum"

// Test case 1B, frekuensi sama:
console.log(mostFrequentItem(["serum", "toner", "toner", "serum"]));
// Expected output: "serum"

// Test case 1C, array kosong:
console.log(mostFrequentItem([]));
// Expected output: null
