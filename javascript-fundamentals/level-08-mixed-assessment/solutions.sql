-- 2. SQL: User dengan Completed Spending di Atas Rata-rata User
--
-- Tabel:
-- users(id, name)
-- orders(id, user_id, amount, status)
--
-- Tugas:
-- Tampilkan user yang total completed spending-nya di atas rata-rata.
--
-- Ketentuan:
-- - Hanya order dengan status = 'completed'.
-- - Hitung total completed spending per user.
-- - Hitung rata-rata total completed spending per user.
-- - Tampilkan user yang total completed spending-nya di atas rata-rata.
-- - Urutkan dari terbesar ke terkecil.
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
ON users.id = orders.user_id
WHERE orders.status = 'completed'
GROUP BY users.id, users.name
HAVING SUM(orders.amount) > (
    SELECT AVG(total_completed_spending)
    FROM (
        SELECT user_id, SUM(amount) AS total_completed_spending
        FROM orders
        WHERE status = 'completed'
        GROUP BY user_id
    ) AS user_spending_average
)
ORDER BY total_completed_spending DESC;