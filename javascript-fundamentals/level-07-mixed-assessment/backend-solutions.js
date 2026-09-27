// 3. Backend Logic: Update Product Price
//
// Tugas:
// Buat function updateProductPrice(productId, newPrice).
//
// Ketentuan:
// - Product tidak ditemukan: return "Product not found".
// - newPrice <= 0: return "Invalid price".
// - Jika valid, update harga product dan return object product.

const products = [
  { id: 1, name: "Serum", price: 150000 },
  { id: 2, name: "Toner", price: 100000 },
];

function updateProductPrice(productId, newPrice) {
  // Tulis solusi nomor 3 di sini.
}

// Test case 3A, update valid:
console.log(updateProductPrice(1, 175000));
// Expected output:
// {
//   id: 1,
//   name: "Serum",
//   price: 175000,
// }

// Test case 3B, product tidak ditemukan:
console.log(updateProductPrice(999, 200000));
// Expected output: "Product not found"

// Test case 3C, price tidak valid:
console.log(updateProductPrice(1, 0));
// Expected output: "Invalid price"
