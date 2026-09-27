const express = require("express");

const app = express();

app.use(express.json());

const products = [
  { id: 1, name: "Serum", price: 150000, stock: 5 },
  { id: 2, name: "Toner", price: 100000, stock: 0 },
  { id: 3, name: "Cleanser", price: 75000, stock: 8 },
];

const users = [
  { id: 1, name: "Imam", email: "imam@mail.com" },
  { id: 2, name: "Andi" },
  { id: 3, name: "Budi" },
  { id: 4, name: "Raka" },
  { id: 5, name: "Dina" },
];

// ============================================================
// 1. Filter dan Sort Products
// ============================================================
// Tugas:
// - Baca minPrice, available, dan sort dari req.query.
// - Terapkan hanya filter yang dikirim.
// - Jangan mengubah urutan array products secara permanen.
//
// Test case 1A:
// Request: GET /search/products?minPrice=100000&available=true&sort=asc
// Expected status: 200
// Expected output:
// [{ id: 1, name: "Serum", price: 150000, stock: 5 }]
//
// Test case 1B:
// Request: GET /search/products?sort=desc
// Expected status: 200
// Expected output:
// [
//   { id: 1, name: "Serum", price: 150000, stock: 5 },
//   { id: 2, name: "Toner", price: 100000, stock: 0 },
//   { id: 3, name: "Cleanser", price: 75000, stock: 8 },
// ]

app.get("/search/products", (req, res) => {
  // Tulis solusi nomor 1 di sini.
});

// Endpoint pendukung untuk memeriksa hasil delete nomor 4.
app.get("/products", (req, res) => {
  // Kirim seluruh products di sini.
});

// ============================================================
// 2. Partial Update User
// ============================================================
// Tugas:
// - Cari user dari req.params.id.
// - Ubah hanya name atau email yang benar-benar dikirim melalui req.body.
// - Field lainnya harus mempertahankan nilai lama.
//
// Test case 2A:
// Request: PATCH /users/1
// Body: { name: "Imam Bahri" }
// Expected status: 200
// Expected output:
// { id: 1, name: "Imam Bahri", email: "imam@mail.com" }
//
// Test case 2B:
// Request: PATCH /users/999
// Body: { name: "Tidak Ada" }
// Expected status: 404
// Expected output: { message: "User not found" }

app.patch("/users/:id", (req, res) => {
  // Tulis solusi nomor 2 di sini.
});

// ============================================================
// 3. Create User dan Prevent Duplicate Email
// ============================================================
// Tugas:
// - Ambil name dan email dari req.body.
// - Tolak email yang sudah tersedia dengan status 409.
// - Perbandingan email tidak membedakan huruf besar dan kecil.
// - Jika valid, buat user baru dengan ID terbesar ditambah satu.
//
// Test case 3A:
// Request: POST /users
// Body: { name: "Budi Baru", email: "IMAM@mail.com" }
// Expected status: 409
// Expected output: { message: "Email already exists" }
//
// Test case 3B:
// Request: POST /users
// Body: { name: "Sari", email: "sari@mail.com" }
// Expected status: 201
// Expected output: { id: 6, name: "Sari", email: "sari@mail.com" }

app.post("/users", (req, res) => {
  // Tulis solusi nomor 3 di sini.
});

// ============================================================
// 4. Delete Product
// ============================================================
// Tugas:
// - Cari product dari req.params.id.
// - Jika ditemukan, hapus dari array products.
// - GET /products setelah delete tidak boleh memuat product tersebut.
//
// Test case 4A:
// Request: DELETE /products/2
// Expected status: 200
// Expected output: { message: "Product deleted" }
//
// Test lanjutan:
// Request: GET /products
// Expected output tidak memuat product dengan id 2.
//
// Test case 4B:
// Request: DELETE /products/999
// Expected status: 404
// Expected output: { message: "Product not found" }

app.delete("/products/:id", (req, res) => {
  // Tulis solusi nomor 4 di sini.
});

// ============================================================
// 5. Pagination Users
// ============================================================
// Tugas:
// - Baca page dan limit dari req.query.
// - Ambil bagian users sesuai halaman tersebut.
// - Tolak page atau limit <= 0 dengan status 400.
//
// Test case 5A:
// Request: GET /users?page=2&limit=2
// Expected status: 200
// Expected output:
// {
//   page: 2,
//   limit: 2,
//   data: [
//     { id: 3, name: "Budi" },
//     { id: 4, name: "Raka" },
//   ],
// }
//
// Test case 5B:
// Request: GET /users?page=0&limit=2
// Expected status: 400
// Expected output: { message: "Invalid pagination" }

app.get("/users", (req, res) => {
  // Tulis solusi nomor 5 di sini.
});

if (require.main === module) {
  app.listen(3001, () => {
    console.log("Server running on http://localhost:3001");
  });
}

module.exports = { app, products, users };
