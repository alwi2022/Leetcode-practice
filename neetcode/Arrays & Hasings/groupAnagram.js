/**
 Group Anagrams
Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Example 1:

Input: strs = ["act","pots","tops","cat","stop","hat"]

Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]
Example 2:

Input: strs = ["x"]

Output: [["x"]]
Example 3:

Input: strs = [""]

Output: [[""]]
Constraints:

1 <= strs.length <= 1000.
0 <= strs[i].length <= 100
strs[i] is made up of lowercase English letters.

 */
function groupAnagrams(strs) {
  const map = {};
  for (let i = 0; i < strs.length; i++) {
    const sorted = strs[i].split("").sort().join("");
    if (!map[sorted]) {
      map[sorted] = [];
    }
    map[sorted].push(strs[i]);
  }
  return Object.values(map);
}

// console.log(groupAnagrams(["act", "pots", "tops", "cat", "stop", "hat"]));
// Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]

// latihan hashmap

// const map = {}
// map["cat"] = 'anjay'
// console.log(map)
// WUIHHH mantap sekali!! 🔥🔥
// Aku buatin **template function** untuk *setiap level soal*, lengkap dan rapi, tanpa spoiler jawaban — jadi kamu tinggal fokus mengisi logikanya.

// FORMAT:

// * Ada deskripsi singkat soal
// * Disediakan function kosong
// * Kamu tinggal isi bagian dalamnya

// Let’s gooo! 🚀🔥

// ---

// # 🟦 **⭐⭐ Level 1 — Counting Frequency**

// ### ❗Soal:

// Hitung berapa kali setiap angka muncul dalam array.
// Return sebuah object/map berisi frekuensi.

// ```js
// // Level 1 — Counting Frequency
function countFrequency(nums) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 1;
    } else {
      map[nums[i]]++;
    }
  }
  return map;
}

console.log(countFrequency([1, 2, 2, 3, 3, 3]));
// // Output yang diharapkan: {1:1, 2:2, 3:3}
// ```

// ---

// # 🟩 **⭐⭐ Level 2 — Contains Duplicate**

// ### ❗Soal:

// Return `true` jika ada string yang muncul lebih dari sekali.

// ```js
// // Level 2 — Contains Duplicate
function hasDuplicate(strings) {
  const map = {};
  for (let i = 0; i < strings.length; i++) {
    if (map[strings[i]]) {
      console.log(map[strings[i]], "dalam hashmap");
      return true;
    }
    map[strings[i]] = true;
    console.log(map[strings[i]], "luar hashmap");
  }
  console.log(map, "luar loop");
  return false;
}

console.log(hasDuplicate(["a", "b", "c", "d", "e", "f"]));
// // Output yang diharapkan: true
// ```

// ---

// # 🟧 **⭐⭐⭐ Level 3 — Group by First Letter**

// ### ❗Soal:

// Group nama berdasarkan huruf pertama.

// ```js
// // Level 3 — Group Names by First Letter
function groupByFirstLetter(names) {
  const map = {};
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const first = name[0];
    if (!map[first]) {
      map[first] = [];
    }
    map[first].push(name);
  }
  return map;
}

console.log(groupByFirstLetter(["andi", "budi", "bagus", "ani", "charlie"]));
// ```

// ---

// Level 4 — First Unique Character
function firstUniqueChar(str) {
  const freq = {}; // hash map: key = karakter, value = jumlah kemunculan

  // 1) hitung frekuensi tiap karakter
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (freq[ch] === undefined) {
      freq[ch] = 1;
    } else {
      freq[ch] += 1;
    }
  }

  // 2) cari karakter pertama yang frekuensinya 1
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (freq[ch] === 1) {
      return ch;
    }
  }

  return null; // kalau tidak ada karakter unik
}

console.log(firstUniqueChar("abacbde")); // "c"
console.log(firstUniqueChar("aabb"));    // null


console.log(firstUniqueChar("abacbde"));
// Contoh output yang diharapkan: "c"
// ```

// ---

// Level 5 — Subarray Sum Equals K
function subarraySumEqualsK(nums, k) {
  // hash map: key = prefixSum, value = berapa kali prefixSum ini muncul
  const map = new Map();
  map.set(0, 1); // prefixSum = 0 sudah muncul sekali (subarray dari awal)

  let prefixSum = 0;

  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];

    // cek apakah ada prefixSum lama = prefixSum - k
    const need = prefixSum - k;
    if (map.has(need)) {
      // kalau hanya butuh boolean, cukup return true
      return true;
    }

    // update map untuk prefixSum saat ini
    if (map.has(prefixSum)) {
      map.set(prefixSum, map.get(prefixSum) + 1);
    } else {
      map.set(prefixSum, 1);
    }
  }

  return false;
}

console.log(subarraySumEqualsK([1, 2, 3, -2, 5], 6)); // true (contoh: [1,2,3])
console.log(subarraySumEqualsK([1, 2, 3], 7));        // false


// # 🎉 SEMANGAT!!

// Kalau kamu sudah isi logikanya, tinggal kirim ke aku — aku akan:

// * cek apakah benar
// * kasih penjelasan
// * kasih optimasi kalau perlu

// Mau aku tambahin **level 6 versi lebih advanced**? 😄🔥
