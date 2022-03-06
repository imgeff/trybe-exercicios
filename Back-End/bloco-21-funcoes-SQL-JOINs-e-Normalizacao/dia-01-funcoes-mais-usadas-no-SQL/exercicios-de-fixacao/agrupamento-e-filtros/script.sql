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
-- QUERY 3
SELECT
rating,
AVG(rental_duration) AS 'média de duração de locação'
FROM sakila.film
GROUP BY rating
ORDER BY AVG(rental_duration) DESC;
-- QUERY 4
SELECT 
district,
COUNT(*) AS quantity_address
FROM sakila.address
GROUP BY district
ORDER BY quantity_address DESC;
-- QUERY 5
SELECT
rating,
AVG(length) AS 'Durações médias'
FROM sakila.film
GROUP BY rating
HAVING AVG(length) BETWEEN 115.0 AND 121.50
ORDER BY AVG(length) DESC;
-- QUERY 6
SELECT
rating,
SUM(replacement_cost) AS 'total do custo de substituição'
FROM sakila.film
GROUP by rating
HAVING SUM(replacement_cost) > 3950.50
ORDER BY SUM(replacement_cost);