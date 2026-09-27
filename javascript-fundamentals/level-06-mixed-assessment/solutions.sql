-- 2. SQL: JOIN, GROUP BY, dan HAVING
--
-- Tabel:
-- users(id, name)
-- orders(id, user_id, amount, status)
--
-- Tugas:
-- Tampilkan total spending dari order completed untuk setiap user.
-- Hanya tampilkan user dengan total spending lebih dari 300000.
-- Urutkan total dari terbesar ke terkecil.
--
-- Kolom output:
-- name | total_completed_spending
--
-- Expected bentuk output:
-- name | total_completed_spending
-- -----|-------------------------
-- Budi | 2000000
-- Andi | 600000

-- Tulis query nomor 2 di bawah ini.


SELECT users.name, SUM(orders.amount) AS total_completed_spending
FROM users
JOIN orders
on users.id = orders.user_id
WHERE status = 'completed'
GROUP BY users.name
HAVING SUM(orders.amount) > 300000
ORDER BY SUM(orders.amount) DESC

