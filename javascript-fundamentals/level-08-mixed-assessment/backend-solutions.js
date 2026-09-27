// 3. Backend Logic: Delete Product
//
// Tugas:
// Buat function deleteProduct(productId).
//
// Ketentuan:
// - Product tidak ditemukan: return "Product not found".
// - Jika ditemukan, hapus product dari array products.
// - Return object { message: "Product deleted", deletedProduct }.
// - Boleh pakai loop manual atau method array.

const products = [
  { id: 1, name: "Serum", price: 150000 },
  { id: 2, name: "Toner", price: 100000 },
  { id: 3, name: "Cleanser", price: 75000 },
];

function deleteProduct(productId) {
  // Tulis solusi nomor 3 di sini.
}

// Test case 3A, delete valid:
console.log(deleteProduct(2));
// Expected output:
// {
//   message: "Product deleted",
//   deletedProduct: { id: 2, name: "Toner", price: 100000 },
// }

console.log(products);
// Expected output:
// [
//   { id: 1, name: "Serum", price: 150000 },
//   { id: 3, name: "Cleanser", price: 75000 },
// ]

// Test case 3B, product tidak ditemukan:
console.log(deleteProduct(999));
// Expected output: "Product not found"
