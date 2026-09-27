-- 2. SQL: User dengan Completed Order Terbanyak
--
-- Tabel:
-- users(id, name)
-- orders(id, user_id, amount, status)
--
-- Tugas:
-- Tampilkan user dengan jumlah completed order terbanyak.
--
-- Ketentuan:
-- - Hanya order dengan status = 'completed'.
-- - Hitung jumlah completed order per user.
-- - Tampilkan user dengan jumlah completed order terbanyak.
-- - Jika lebih dari satu user memiliki jumlah sama, tampilkan semuanya.
--
-- Kolom output:
-- name | total_completed_orders
--
-- Expected bentuk output:
-- name | total_completed_orders
-- -----|-----------------------
-- Imam | 3
-- Andi | 3

-- Tulis query nomor 2 di bawah ini.
SELECT users.name, COUNT(*) as total_completed_orders
FROM users
JOIN orders
ON users.id =  orders.user_id
WHERE status =  'completed'
GROUP BY users.name
HAVING COUNT(*) = (
    SELECT MAX(total_completed_orders) 
    FROM(
        SELECT user_id, COUNT(*) as total_completed_orders
        FROM orders
        WHERE status = 'completed'
        GROUP BY user_id
    ) as total_orders_user
) 
