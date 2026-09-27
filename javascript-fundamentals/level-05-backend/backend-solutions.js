const express = require("express");

const app = express();

app.use(express.json());

const products = [
  { id: 1, name: "Serum", price: 150000, stock: 5 },
  { id: 2, name: "Toner", price: 100000, stock: 0 },
  { id: 3, name: "Cleanser", price: 75000, stock: 8 },
];

const users = [];

// ============================================================
// 1. GET Product by ID
// ============================================================
// Tugas:
// - Ambil ID product dari req.params.
// - Cari product dengan ID tersebut.
// - Jika ditemukan, kirim product dengan status 200.
// - Jika tidak ditemukan, kirim message dengan status 404.
//
// Test case 1A:
// Request: GET /products/1
// Expected status: 200
// Expected output:
// {
//   id: 1,
//   name: "Serum",
//   price: 150000,
//   stock: 5,
// }
//
// Test case 1B:
// Request: GET /products/999
// Expected status: 404
// Expected output:
// {
//   message: "Product not found",
// }

app.get("/products/:id", (req, res) => {
  const id = Number(req.params.id);

  const product = products.find((item) => item.id === id);

  if (!product) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  return res.status(200).json(product);
});

// ============================================================
// 2. GET Products by Status Stock
// ============================================================
// Tugas:
// - Baca query available dari req.query.
// - Jika available bernilai "true", kirim product dengan stock > 0.
// - Jika query available tidak ada, kirim semua products.
//
// Test case 2A:
// Request: GET /products
// Expected status: 200
// Expected output:
// [
//   { id: 1, name: "Serum", price: 150000, stock: 5 },
//   { id: 2, name: "Toner", price: 100000, stock: 0 },
//   { id: 3, name: "Cleanser", price: 75000, stock: 8 },
// ]
//
// Test case 2B:
// Request: GET /products?available=true
// Expected status: 200
// Expected output:
// [
//   { id: 1, name: "Serum", price: 150000, stock: 5 },
//   { id: 3, name: "Cleanser", price: 75000, stock: 8 },
// ]

app.get("/products", (req, res) => {
  // Tulis solusi nomor 2 di sini.
  let available = req.query.available;
  if (available === "true") {
    let product = products.filter((item) => item.stock > 0);
    return res.status(200).json(product);
  }

  return res.status(200).json(products);
});

// ============================================================
// 3. POST Create User
// ============================================================
// Tugas:
// - Ambil name dan email dari req.body.
// - Jika name kosong, kirim "Name is required" dengan status 400.
// - Jika email kosong, kirim "Email is required" dengan status 400.
// - Jika valid, buat user baru, masukkan ke users, lalu kirim status 201.
//
// Test case 3A:
// Request: POST /users
// Body: { email: "imam@mail.com" }
// Expected status: 400
// Expected output:
// {
//   message: "Name is required",
// }
//
// Test case 3B:
// Request: POST /users
// Body: { name: "Imam" }
// Expected status: 400
// Expected output:
// {
//   message: "Email is required",
// }
//
// Test case 3C:
// Request: POST /users
// Body: { name: "Imam", email: "imam@mail.com" }
// Expected status: 201
// Expected output:
// {
//   id: 1,
//   name: "Imam",
//   email: "imam@mail.com",
// }

app.post("/users", (req, res) => {
  const { name, email } = req.body;

  if (!name) {
    return res.status(400).json({
      message: "Name is required",
    });
  }

  if (!email) {
    return res.status(400).json({
      message: "Email is required",
    });
  }

  const newUser = {
    id: users.length + 1,
    name,
    email,
  };

  users.push(newUser);

  return res.status(201).json(newUser);
});

// ============================================================
// 4. PATCH Update Stock
// ============================================================
// Tugas:
// - Ambil ID product dari req.params dan stock baru dari req.body.
// - Jika product tidak ditemukan, kirim message dengan status 404.
// - Jika stock kurang dari 0, kirim "Invalid stock" dengan status 400.
// - Jika valid, ubah stock product dan kirim hasilnya dengan status 200.
//
// Test case 4A:
// Request: PATCH /products/1/stock
// Body: { stock: 20 }
// Expected status: 200
// Expected output:
// {
//   id: 1,
//   name: "Serum",
//   price: 150000,
//   stock: 20,
// }
//
// Test case 4B:
// Request: PATCH /products/1/stock
// Body: { stock: -1 }
// Expected status: 400
// Expected output:
// {
//   message: "Invalid stock",
// }
//
// Test case 4C:
// Request: PATCH /products/999/stock
// Body: { stock: 10 }
// Expected status: 404
// Expected output:
// {
//   message: "Product not found",
// }

app.patch("/products/:id/stock", (req, res) => {
  const id = Number(req.params.id);
  const { stock } = req.body;

  const product = products.find((item) => item.id === id);

  if (!product) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  if (stock < 0) {
    return res.status(400).json({
      message: "Invalid stock",
    });
  }

  product.stock = stock;

  return res.status(200).json(product);
});

// ============================================================
// 5. POST Create Order
// ============================================================
// Tugas:
// - Ambil productId dan quantity dari req.body.
// - Jika product tidak ditemukan, kirim message dengan status 404.
// - Jika quantity <= 0, kirim message dengan status 400.
// - Jika stock tidak cukup, kirim message dengan status 400.
// - Jika valid, kurangi stock, hitung totalPrice, dan kirim status 201.
//
// Test case 5A:
// Request: POST /orders
// Body: { productId: 1, quantity: 2 }
// Expected status: 201
// Expected output:
// {
//   productId: 1,
//   productName: "Serum",
//   quantity: 2,
//   totalPrice: 300000,
//   remainingStock: 3,
// }
//
// Test case 5B:
// Request: POST /orders
// Body: { productId: 999, quantity: 2 }
// Expected status: 404
// Expected output:
// {
//   message: "Product not found",
// }
//
// Test case 5C:
// Request: POST /orders
// Body: { productId: 1, quantity: 0 }
// Expected status: 400
// Expected output:
// {
//   message: "Invalid quantity",
// }
//
// Test case 5D:
// Request: POST /orders
// Body: { productId: 2, quantity: 1 }
// Expected status: 400
// Expected output:
// {
//   message: "Insufficient stock",
// }

app.post("/orders", (req, res) => {
  const { productId, quantity } = req.body;

  const product = products.find((item) => item.id === productId);

  if (!product) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  if (quantity <= 0) {
    return res.status(400).json({
      message: "Invalid quantity",
    });
  }

  if (product.stock < quantity) {
    return res.status(400).json({
      message: "Insufficient stock",
    });
  }

  product.stock -= quantity;

  return res.status(201).json({
    productId: product.id,
    productName: product.name,
    quantity: quantity,
    totalPrice: product.price * quantity,
    remainingStock: product.stock,
  });
});

if (require.main === module) {
  app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
  });
}

module.exports = { app, products, users };
