const baseUrl = "http://localhost:3000";

async function sendRequest(label, path, options, expectedStatus, expectedBody) {
  try {
    const response = await fetch(`${baseUrl}${path}`, {
      ...options,
      signal: AbortSignal.timeout(3000),
    });
    const actualBody = await response.json();

    console.log(`\n${label}`);
    console.log("Actual status:", response.status);
    console.log("Expected status:", expectedStatus);
    console.log("Actual output:", actualBody);
    console.log("Expected output:", expectedBody);
  } catch (error) {
    console.log(`\n${label}`);
    console.log("Request gagal:", error.message);
  }
}

async function testGetProductById() {
  await sendRequest(
    "1A. GET product yang tersedia",
    "/products/1",
    {},
    200,
    { id: 1, name: "Serum", price: 150000, stock: 5 },
  );

  await sendRequest(
    "1B. GET product yang tidak tersedia",
    "/products/999",
    {},
    404,
    { message: "Product not found" },
  );
}

async function testGetProductsByAvailability() {
  await sendRequest(
    "2A. GET semua products",
    "/products",
    {},
    200,
    [
      { id: 1, name: "Serum", price: 150000, stock: 5 },
      { id: 2, name: "Toner", price: 100000, stock: 0 },
      { id: 3, name: "Cleanser", price: 75000, stock: 8 },
    ],
  );

  await sendRequest(
    "2B. GET products yang stoknya tersedia",
    "/products?available=true",
    {},
    200,
    [
      { id: 1, name: "Serum", price: 150000, stock: 5 },
      { id: 3, name: "Cleanser", price: 75000, stock: 8 },
    ],
  );
}

async function testCreateUser() {
  await sendRequest(
    "3A. POST user tanpa name",
    "/users",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "imam@mail.com" }),
    },
    400,
    { message: "Name is required" },
  );

  await sendRequest(
    "3B. POST user tanpa email",
    "/users",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Imam" }),
    },
    400,
    { message: "Email is required" },
  );

  await sendRequest(
    "3C. POST user valid",
    "/users",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Imam", email: "imam@mail.com" }),
    },
    201,
    { id: 1, name: "Imam", email: "imam@mail.com" },
  );
}

async function testUpdateStock() {
  await sendRequest(
    "4A. PATCH stock valid",
    "/products/1/stock",
    {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ stock: 20 }),
    },
    200,
    { id: 1, name: "Serum", price: 150000, stock: 20 },
  );

  await sendRequest(
    "4B. PATCH stock negatif",
    "/products/1/stock",
    {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ stock: -1 }),
    },
    400,
    { message: "Invalid stock" },
  );

  await sendRequest(
    "4C. PATCH product yang tidak tersedia",
    "/products/999/stock",
    {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ stock: 10 }),
    },
    404,
    { message: "Product not found" },
  );
}

async function testCreateOrder() {
  await sendRequest(
    "5A. POST order valid",
    "/orders",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId: 1, quantity: 2 }),
    },
    201,
    {
      productId: 1,
      productName: "Serum",
      quantity: 2,
      totalPrice: 300000,
      remainingStock: 3,
    },
  );

  await sendRequest(
    "5B. POST order dengan product yang tidak tersedia",
    "/orders",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId: 999, quantity: 2 }),
    },
    404,
    { message: "Product not found" },
  );

  await sendRequest(
    "5C. POST order dengan quantity tidak valid",
    "/orders",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId: 1, quantity: 0 }),
    },
    400,
    { message: "Invalid quantity" },
  );

  await sendRequest(
    "5D. POST order dengan stock tidak cukup",
    "/orders",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId: 2, quantity: 1 }),
    },
    400,
    { message: "Insufficient stock" },
  );
}

async function run() {
  // Buka komentar pada test yang ingin dijalankan.
  // Jalankan satu kelompok test dalam satu waktu.

  // await testGetProductById();
  // await testGetProductsByAvailability();
  // await testCreateUser();
  // await testUpdateStock();
  // await testCreateOrder();
}

run();
