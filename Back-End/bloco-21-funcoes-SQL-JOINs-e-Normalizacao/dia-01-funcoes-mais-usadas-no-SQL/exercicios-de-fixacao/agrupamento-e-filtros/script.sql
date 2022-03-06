-- QUERY 1
SELECT 
active,
COUNT(active) AS quantity_clients
FROM sakila.customer
GROUP BY active;
-- QUERY 2
SELECT 
store_id,
active,
COUNT(active)
FROM sakila.customer
GROUP BY store_id, active;