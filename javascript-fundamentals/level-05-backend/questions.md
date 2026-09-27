Gas. Sekarang kita naik ke **Express API style**, tapi tetap sederhana dulu supaya muscle memory backend kamu balik.

Aku kasih **5 soal**, dari basic endpoint sampai create order.

## 1. GET Product by ID

Data:

```javascript
const products = [
  { id: 1, name: "Serum", price: 150000, stock: 5 },
  { id: 2, name: "Toner", price: 100000, stock: 0 },
  { id: 3, name: "Cleanser", price: 75000, stock: 8 },
];
```

Buat endpoint:

```javascript
app.get("/products/:id", (req, res) => {
  // code here
});
```

Kalau:

```http
GET /products/1
```

Response:

```json
{
  "id": 1,
  "name": "Serum",
  "price": 150000,
  "stock": 5
}
```

Kalau product tidak ditemukan:

```json
{
  "message": "Product not found"
}
```

Status:

```text
404
```

---

## 2. GET Products by Status Stock

Buat endpoint:

```javascript
app.get("/products", (req, res) => {
  // code here
});
```

Support query:

```http
GET /products?available=true
```

Kalau `available=true`, hanya return product dengan:

```javascript
stock > 0
```

Expected:

```json
[
  {
    "id": 1,
    "name": "Serum",
    "price": 150000,
    "stock": 5
  },
  {
    "id": 3,
    "name": "Cleanser",
    "price": 75000,
    "stock": 8
  }
]
```

Kalau query `available` tidak ada, return semua products.

---

## 3. POST Create User

Buat endpoint:

```javascript
app.post("/users", (req, res) => {
  // code here
});
```

Request body:

```json
{
  "name": "Imam",
  "email": "imam@mail.com"
}
```

Kalau `name` kosong:

```json
{
  "message": "Name is required"
}
```

Status:

```text
400
```

Kalau `email` kosong:

```json
{
  "message": "Email is required"
}
```

Status:

```text
400
```

Kalau sukses:

```json
{
  "id": 1,
  "name": "Imam",
  "email": "imam@mail.com"
}
```

Status:

```text
201
```

---

## 4. PATCH Update Stock

Buat:

```javascript
app.patch("/products/:id/stock", (req, res) => {
  // code here
});
```

Request:

```json
{
  "stock": 20
}
```

Kalau product tidak ditemukan:

```text
404
```

Kalau stock kurang dari `0`:

```json
{
  "message": "Invalid stock"
}
```

Status:

```text
400
```

Kalau berhasil:

```json
{
  "id": 1,
  "name": "Serum",
  "price": 150000,
  "stock": 20
}
```

Status:

```text
200
```

---

## 5. POST Create Order

Buat:

```javascript
app.post("/orders", (req, res) => {
  // code here
});
```

Request:

```json
{
  "productId": 1,
  "quantity": 2
}
```

Rules:
- product tidak ada → `404`
- quantity <= 0 → `400`
- stock kurang → `400`
- kalau sukses:
  - kurangi stock
  - hitung `totalPrice`
  - return status `201`

Expected:

```json
{
  "productId": 1,
  "productName": "Serum",
  "quantity": 2,
  "totalPrice": 300000,
  "remainingStock": 3
}
```

Starter lengkap:

```javascript
const express = require("express");

const app = express();

app.use(express.json());

const products = [
  { id: 1, name: "Serum", price: 150000, stock: 5 },
  { id: 2, name: "Toner", price: 100000, stock: 0 },
  { id: 3, name: "Cleanser", price: 75000, stock: 8 },
];

const users = [];

// nomor 1
app.get("/products/:id", (req, res) => {
  // code here
});

// nomor 2
app.get("/products", (req, res) => {
  // code here
});

// nomor 3
app.post("/users", (req, res) => {
  // code here
});

// nomor 4
app.patch("/products/:id/stock", (req, res) => {
  // code here
});

// nomor 5
app.post("/orders", (req, res) => {
  // code here
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

Kerjakan **1–2 dulu**. Fokus ke `req.params`, `req.query`, `res.status()`, dan `res.json()`. Setelah itu kirim ke aku, nanti aku review.