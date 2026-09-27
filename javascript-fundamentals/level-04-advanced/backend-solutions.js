// Level 4, soal 16 sampai 20

// 16. Validasi Create User
function createUser(name, email) {
  // Tulis solusi di sini.
  if (!name) {
    return { success: false, message: "Name is required" };
  }

  if (!email) {
    return { success: false, message: "Email is required" };
  }

  return {
    success: true,
    user: {
      name,
      email,
    },
  };
}

// console.log(createUser("", "imam@mail.com"));
// Expected output:
// { success: false, message: "Name is required" }

// console.log(createUser("Imam", ""));
// Expected output:
// { success: false, message: "Email is required" }

// console.log(createUser("Imam", "imam@mail.com"));
// Expected output:
// {
//   success: true,
//   user: {
//     name: "Imam",
//     email: "imam@mail.com",
//   },
// }

// 17. Update Stock
function reduceStock(product, quantity) {
  // Tulis solusi di sini.
  if (product.stock < quantity) {
    return {
      success: "false",
      message: "Insufficient stock",
    };
  }

  product.stock -= quantity

  return product
}

const stockProduct = {
  name: "Serum",
  stock: 10,
};
console.log(reduceStock(stockProduct, 3));
// Expected output:
// { name: "Serum", stock: 7 }

// console.log(reduceStock(stockProduct, 11));
// Expected output:
// "Insufficient stock"

// 18. Buat Order
function createOrder(product, quantity) {
  // Tulis solusi di sini.
  if (product.stock < quantity) {
    return {
      success: "false",
      message: "Insufficient stock",
    };
  }

  return {
    productId: product.id,
    productName: product.name,
    quantity: quantity,
    totalPrice: product.price * quantity,
    remainingStock: product.stock - quantity,
  };
}

const orderProduct = {
  id: 1,
  name: "Serum",
  price: 150000,
  stock: 5,
};
// console.log(createOrder(orderProduct, 2));
// Expected output:
// {
//   productId: 1,
//   productName: "Serum",
//   quantity: 2,
//   totalPrice: 300000,
//   remainingStock: 3,
// }

// 19. Filter Order Completed Secara Manual
function getCompletedOrders(orders) {
  // Tulis solusi di sini.
  let result = [];
  for (let i = 0; i < orders.length; i++) {
    let order = orders[i];
    if (order.status === "completed") {
      result.push(order);
    }
  }

  return result;
}

const statusOrders = [
  { id: 1, status: "completed" },
  { id: 2, status: "pending" },
  { id: 3, status: "completed" },
];
// console.log(getCompletedOrders(statusOrders));
// Expected output:
// [
//   { id: 1, status: "completed" },
//   { id: 3, status: "completed" },
// ]

// 20. Ringkasan Order
function orderSummary(orders) {
  // Tulis solusi di sini.
  let totalOrders = orders.length;
  let totalCompletedAmount = 0;
  let completedOrders = 0;
  for (let i = 0; i < orders.length; i++) {
    let order = orders[i];
    if (order.status === "completed") {
      totalCompletedAmount += order.amount;
      completedOrders++;
    }
  }

  return {
    totalOrders: totalOrders,
    completedOrders: completedOrders,
    totalCompletedAmount: totalCompletedAmount,
  };
}

const summaryOrders = [
  { status: "completed", amount: 100000 },
  { status: "pending", amount: 50000 },
  { status: "completed", amount: 200000 },
  { status: "cancelled", amount: 75000 },
];
console.log(orderSummary(summaryOrders));
// Expected output:
// {
//   totalOrders: 4,
//   completedOrders: 2,
//   totalCompletedAmount: 300000,
// }
