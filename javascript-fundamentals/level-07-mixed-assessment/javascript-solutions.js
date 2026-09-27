// 1. JavaScript Logic: First Non-Repeating Character
//
// Tugas:
// Buat function firstUniqueCharacter(text) yang mengembalikan karakter
// pertama yang hanya muncul 1 kali.
//
// Ketentuan:
// - Return karakter pertama yang hanya muncul 1 kali.
// - Jika tidak ada, return null.
//
// Input utama:
// "aabbcddee"
//
// Expected output:
// "c"

function firstUniqueCharacter(text) {
  // Tulis solusi nomor 1 di sini.
  let seen = {};
  for (let i = 0; i < text.length; i++) {
    let str = text[i];
    if (seen[str]) {
      seen[str] += 1;
    } else {
      seen[str] = 1;
    }
  }

  for (let i = 0; i < text.length; i++) {
    let str = text[i];

    if (seen[str] === 1) {
      return str;
    }
  }

  return null
}

// Test case 1A:
console.log(firstUniqueCharacter("aabbcddee"));
// Expected output: "c"

// Test case 1B, tidak ada karakter unik:
console.log(firstUniqueCharacter("aabbcc"));
// Expected output: null
