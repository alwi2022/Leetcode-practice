const baseUrl = "http://localhost:3001";

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

async function testProductSearch() {
  await sendRequest(
    "1A. Filter dan sort products",
    "/search/products?minPrice=100000&available=true&sort=asc",
    {},
    200,
    [{ id: 1, name: "Serum", price: 150000, stock: 5 }],
  );
  await sendRequest(
    "1B. Sort products descending",
    "/search/products?sort=desc",
    {},
    200,
    [
      { id: 1, name: "Serum", price: 150000, stock: 5 },
      { id: 2, name: "Toner", price: 100000, stock: 0 },
      { id: 3, name: "Cleanser", price: 75000, stock: 8 },
    ],
  );
}

async function testPartialUserUpdate() {
  await sendRequest(
    "2A. Partial update user",
    "/users/1",
    {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Imam Bahri" }),
    },
    200,
    { id: 1, name: "Imam Bahri", email: "imam@mail.com" },
  );
  await sendRequest(
    "2B. User tidak ditemukan",
    "/users/999",
    {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Tidak Ada" }),
    },
    404,
    { message: "User not found" },
  );
}

async function testDuplicateEmail() {
  await sendRequest(
    "3A. Duplicate email",
    "/users",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Budi Baru", email: "IMAM@mail.com" }),
    },
    409,
    { message: "Email already exists" },
  );
  await sendRequest(
    "3B. Create user valid",
    "/users",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Sari", email: "sari@mail.com" }),
    },
    201,
    { id: 6, name: "Sari", email: "sari@mail.com" },
  );
}

async function testDeleteProduct() {
  await sendRequest(
    "4A. Delete product",
    "/products/2",
    { method: "DELETE" },
    200,
    { message: "Product deleted" },
  );
  await sendRequest(
    "4B. Products setelah delete",
    "/products",
    {},
    200,
    [
      { id: 1, name: "Serum", price: 150000, stock: 5 },
      { id: 3, name: "Cleanser", price: 75000, stock: 8 },
    ],
  );
  await sendRequest(
    "4C. Product tidak ditemukan",
    "/products/999",
    { method: "DELETE" },
    404,
    { message: "Product not found" },
  );
}

async function testUserPagination() {
  await sendRequest(
    "5A. Pagination users",
    "/users?page=2&limit=2",
    {},
    200,
    {
      page: 2,
      limit: 2,
      data: [
        { id: 3, name: "Budi" },
        { id: 4, name: "Raka" },
      ],
    },
  );
  await sendRequest(
    "5B. Pagination tidak valid",
    "/users?page=0&limit=2",
    {},
    400,
    { message: "Invalid pagination" },
  );
}

async function run() {
  // Buka komentar pada test yang ingin dijalankan.
  // Jalankan satu kelompok test dalam satu waktu.

  // await testProductSearch();
  // await testPartialUserUpdate();
  // await testDuplicateEmail();
  // await testDeleteProduct();
  // await testUserPagination();
}

run();
