
-- ---

-- # C. SQL — 5 soal

-- ```text
users
-----
id
name
email
-- ```

-- ```text
orders
------
id
user_id
total_amount
status
created_at
-- ```



-- ### 11. Ambil semua order completed
-- Tulis query untuk mengambil semua data dari `orders` yang:

-- ```text
-- status = 'completed'
-- ```

SELECT * FROM orders
WHERE status = 'completed';
-- ---

-- ### 12. Hitung jumlah order completed
-- Output:

-- ```text
-- total_orders
-- ```

SELECT COUNT(*) as total_orders
FROM orders
WHERE status = 'completed';
-- ---

-- ### 13. Total pengeluaran per user
-- Tampilkan:

-- ```text
-- user_id
-- total_spent
-- ```

SELECT user_id, SUM(orders.total_amount) AS total_spent
FROM orders
WHERE status = 'completed'
GROUP BY user_id;

-- Hanya order `completed`.

-- ---

-- ### 14. Join users dan orders
-- Tampilkan:

-- ```text
-- name
-- total_amount
-- status
-- ```

SELECT users.name, orders.total_amount, orders.status
FROM users
JOIN orders
ON users.id = orders.user_id;

-- Gabungkan `users` dan `orders`.

-- ---

-- ### 15. User dengan total spending di atas 500000
-- Tampilkan:

-- ```text
-- name
-- total_spent
-- ```

-- Hanya hitung completed order.

-- Hanya tampilkan user yang:

-- ```text
-- total_spent > 500000
-- ```

SELECT users.name, SUM(orders.total_amount) AS total_spent
FROM users
JOIN orders
ON users.id = orders.user_id
WHERE status = 'completed'
GROUP BY users.id, users.name
HAVING SUM(orders.total_amount) >  500000

-- ---
