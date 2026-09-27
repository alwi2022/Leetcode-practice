// 1. JavaScript Logic: Character Frequency Match
//
// Tugas:
// Buat function hasSameCharacterFrequency(word1, word2) yang mengecek
// apakah kedua string punya karakter dengan jumlah kemunculan yang sama.
//
// Ketentuan:
// - Return true jika jumlah kemunculan setiap karakter sama.
// - Urutan karakter boleh berbeda.
// - Case-sensitive.
// - Jika panjang berbeda, langsung return false.
//
// Input utama:
// "aabbc", "abcab"
//
// Expected output:
// true

function hasSameCharacterFrequency(word1, word2) {
  // Tulis solusi nomor 1 di sini.
}

// Test case 1A:
console.log(hasSameCharacterFrequency("aabbc", "abcab"));
// Expected output: true

// Test case 1B, jumlah kemunculan berbeda:
console.log(hasSameCharacterFrequency("aabb", "abbb"));
// Expected output: false

// Test case 1C, panjang berbeda:
console.log(hasSameCharacterFrequency("abc", "abcd"));
// Expected output: false
