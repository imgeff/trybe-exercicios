-- QUERY 1
SELECT 
active,
COUNT(active) AS quantity_clients
FROM sakila.customer
GROUP BY active;