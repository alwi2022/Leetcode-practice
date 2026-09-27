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

  if (word1.length !== word2.length) {
    return false;
  }

  let seen = {};
  let result = false;
  for (let i = 0; i < word1.length; i++) {
    let str = word1[i];
    let btr = str.toLowerCase();
    if (seen[btr]) {
      seen[btr] += 1;
    } else {
      seen[btr] = 1;
    }
  }

  for (let i = 0; i < word2.length; i++) {
    let str = word2[i];
    let btr = str.toLowerCase();
    if (seen[str]) {
      seen[str] -= 1;
      result = true;
    } else {
      return false;
    }
  }

  return result;
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
