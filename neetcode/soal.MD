# 🧠 Daftar Soal Coding Challenge

---

## 1. 🚫 Hapus Duplikat dari Array Terurut

### Deskripsi

Diberikan sebuah array integer `nums` yang telah terurut dalam urutan non-menurun. Tugas Anda adalah menghapus duplikat *secara in-place* sehingga setiap elemen hanya muncul satu kali.

Kembalikan jumlah elemen unik `k`, dan ubah `nums` sehingga elemen dari indeks `0` hingga `k-1` adalah elemen unik tersebut.

> **Catatan:**
> - Urutan elemen unik harus sama seperti pada array asli.
> - Elemen setelah indeks `k-1` tidak perlu dipedulikan.

### Contoh

Input: nums = [1,1,2,3,4]
Output: [1,2,3,4], k = 4

Input: nums = [2,10,10,30,30,30]
Output: [2,10,30], k = 3



### Kendala

- 1 <= nums.length <= 30.000  
- -100 <= nums[i] <= 100  
- nums terurut secara non-menurun

---

## 2. 🧩 Mengandung Duplikat

### Deskripsi

Diberikan array integer `nums`, kembalikan `true` jika terdapat elemen yang muncul lebih dari sekali. Jika semua elemen unik, kembalikan `false`.

### Contoh

Input: nums = [1,2,3,3]
Output: true

Input: nums = [1,2,3,4]
Output: false


### Kompleksitas yang Disarankan

- Waktu: O(n)  
- Ruang: O(n)

### Petunjuk

- Hindari brute force O(n²).
- Gunakan struktur data seperti HashSet untuk melacak elemen yang sudah muncul.

---

## 3. 🔁 Anagram Valid

### Deskripsi

Diberikan dua string `s` dan `t`, kembalikan `true` jika keduanya merupakan anagram satu sama lain.

> **Definisi:**  
> Anagram adalah dua string yang memiliki karakter yang sama persis dengan frekuensi yang sama, walaupun urutan karakter bisa berbeda.

### Contoh

Input: s = "racecar", t = "carrace"
Output: true

Input: s = "jar", t = "jam"
Output: false




### Kendala

- `s` dan `t` hanya terdiri dari huruf kecil a-z

### Kompleksitas yang Disarankan

- Waktu: O(n + m)  
- Ruang: O(1) jika alfabet tetap

### Petunjuk

- Daripada menyortir, gunakan hashmap untuk mencatat frekuensi karakter dan bandingkan.

---

## 4. ➕ Two Sum

### Deskripsi

Diberikan array `nums` dan integer `target`, cari dua indeks `i` dan `j` sehingga:

nums[i] + nums[j] == target dan i ≠ j

Kembalikan [i, j] dengan i < j.

### Contoh

Input: nums = [3,4,5,6], target = 7
Output: [0,1]

Input: nums = [5,5], target = 10
Output: [0,1]


### Kendala

- 2 <= nums.length <= 1000  
- -10^7 <= nums[i], target <= 10^7

### Kompleksitas yang Disarankan

- Waktu: O(n)  
- Ruang: O(n)

### Petunjuk

- Gunakan hashmap untuk menyimpan selisih antara target dan elemen yang sedang diiterasi.

---

## 5. 🧮 Kelompokkan Anagram

### Deskripsi

Diberikan array string `strs`, kelompokkan string yang merupakan anagram ke dalam sub-list.

### Contoh

Input: strs = ["act","pots","tops","cat","stop","hat"]
Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]

Input: strs = ["x"]
Output: [["x"]]

Input: strs = [""]
Output: [[""]]



### Kendala

- 1 <= strs.length <= 1000  
- 0 <= strs[i].length <= 100  
- strs[i] hanya huruf kecil a-z

### Kompleksitas yang Disarankan

- Waktu: O(n * klogk), dengan `k` adalah panjang string maksimal  
- Ruang: O(n)

### Petunjuk

- Gunakan `sorted(str)` sebagai kunci dalam hashmap, lalu kelompokkan berdasarkan hasil sortirnya.

---

