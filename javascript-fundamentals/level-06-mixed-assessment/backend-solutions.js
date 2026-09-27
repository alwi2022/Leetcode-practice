// 3. Backend Logic: Create Order
//
// Tugas:
// Buat function createOrder(productId, quantity).
//
// Ketentuan:
// - Product tidak ditemukan: return "Product not found".
// - quantity <= 0: return "Invalid quantity".
// - Stock tidak cukup: return "Insufficient stock".
// - Jika valid, kurangi stock product, hitung total price, dan return
//   object order sesuai expected output.

const products = [
  { id: 1, name: "Serum", price: 150000, stock: 5 },
  { id: 2, name: "Toner", price: 100000, stock: 0 },
];

function createOrder(productId, quantity) {
  // Tulis solusi nomor 3 di sini.


  let product = products.find((item) => item.id === productId);
  if (!product) {
    return "product not found";
  }
  if (quantity <= 0) {
    return "Invalid quantity";
  }

  
  if (product.stock < quantity) {
    return "Insufficient stock";
  }
  let totalPrice = (product.price * quantity);
  let remainingStock = (product.stock -= quantity);

  return {
    productId,
    productName: product.name,
    quantity,
    totalPrice,
    remainingStock,
  };
}

// Test case 3A, order valid:
console.log(createOrder(1, 2));
// Expected output:
// {
//   productId: 1,
//   productName: "Serum",
//   quantity: 2,
//   totalPrice: 300000,
//   remainingStock: 3,
// }

// Test case 3B, product tidak ditemukan:
console.log(createOrder(999, 1));
// Expected output: "Product not found"

// Test case 3C, quantity tidak valid:
console.log(createOrder(1, 0));
// Expected output: "Invalid quantity"

// Test case 3D, stock tidak cukup:
console.log(createOrder(2, 1));
// Expected output: "Insufficient stock"
