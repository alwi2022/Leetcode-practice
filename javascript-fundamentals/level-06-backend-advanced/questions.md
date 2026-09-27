# Level 06 Backend Assessment

Kerjakan lima soal Express berikut. Semua query parameter bersifat opsional kecuali dinyatakan sebaliknya.

## Data Awal

```javascript
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
```

## 1. Filter dan Sort Products

Endpoint:

```http
GET /search/products
```

Query yang didukung:

- `minPrice`: hanya product dengan `price >= minPrice`.
- `available=true`: hanya product dengan `stock > 0`.
- `sort=asc`: urutkan harga dari kecil ke besar.
- `sort=desc`: urutkan harga dari besar ke kecil.
- Semua query bersifat opsional.

Test request:

```http
GET /search/products?minPrice=100000&available=true&sort=asc
```

Expected status: `200`

Expected response:

```json
[
  {
    "id": 1,
    "name": "Serum",
    "price": 150000,
    "stock": 5
  }
]
```

## 2. Partial Update User

Endpoint:

```http
PATCH /users/:id
```

Request dapat mengubah `name`, `email`, atau keduanya. Field yang tidak dikirim harus mempertahankan nilai lama.

Test request:

```http
PATCH /users/1
```

```json
{
  "name": "Imam Bahri"
}
```

Expected status: `200`

Expected response:

```json
{
  "id": 1,
  "name": "Imam Bahri",
  "email": "imam@mail.com"
}
```

Jika user tidak ditemukan, return status `404`:

```json
{
  "message": "User not found"
}
```

## 3. Create User dan Prevent Duplicate Email

Endpoint:

```http
POST /users
```

Jika email sudah digunakan, return status `409`:

```json
{
  "message": "Email already exists"
}
```

Pemeriksaan email tidak membedakan huruf besar dan kecil.

Jika email belum digunakan, buat user baru dengan ID terbesar ditambah satu dan return status `201`.

## 4. Delete Product

Endpoint:

```http
DELETE /products/:id
```

- Jika product tidak ditemukan, return `404` dan `{ "message": "Product not found" }`.
- Jika ditemukan, hapus product dari array dan return status `200`:

```json
{
  "message": "Product deleted"
}
```

Product yang sudah dihapus tidak boleh muncul lagi pada `GET /products`.

## 5. Pagination Users

Endpoint:

```http
GET /users?page=2&limit=2
```

`page` dan `limit` harus lebih besar dari nol. Jika tidak valid, return status `400` dan `{ "message": "Invalid pagination" }`.

Expected status: `200`

Expected response:

```json
{
  "page": 2,
  "limit": 2,
  "data": [
    { "id": 3, "name": "Budi" },
    { "id": 4, "name": "Raka" }
  ]
}
```
