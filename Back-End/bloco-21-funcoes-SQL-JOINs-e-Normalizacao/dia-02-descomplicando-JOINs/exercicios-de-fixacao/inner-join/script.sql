-- QUERY 1
SELECT act.actor_id, act.first_name, act.last_name, fact.film_id
FROM sakila.actor act
INNER JOIN sakila.film_actor fact
ON act.actor_id = fact.actor_id;
-- QUERY 2
SELECT stf.first_name, stf.last_name, adr.address
FROM sakila.staff stf
INNER JOIN sakila.address adr
ON stf.address_id = adr.address_id;
-- QUERY 3
SELECT c.customer_id,c.first_name, c.email, c.address_id, adr.address
FROM sakila.customer c
INNER JOIN sakila.address adr
ON c.address_id = adr.address_id
ORDER BY c.first_name DESC
LIMIT 100;
-- QUERY 4
SELECT 
CONCAT(C.first_name, ' ', C.last_name) AS `name`,
C.email, C.address_id, A.address, A.district
FROM sakila.customer C
INNER JOIN sakila.address A
ON C.address_id = A.address_id
HAVING A.district = 'California' AND LCASE(`name`) LIKE('%rene%');
-- QUERY 5
SELECT 
CONCAT(c.first_name, ' ', c.last_name) AS `name`,
COUNT(a.address_id) AS Total_Address
FROM sakila.customer c
INNER JOIN sakila.address a
ON c.address_id = a.address_id
WHERE c.active = 1
GROUP BY `name`
ORDER BY `name` DESC;
-- QUERY 6
SELECT
s.first_name,  s.last_name, AVG(p.amount) AS media_payment
FROM sakila.staff s
INNER JOIN sakila.payment p
ON s.staff_id = p.staff_id
WHERE YEAR(p.payment_date) = 2006
GROUP BY s.first_name, s.last_name;
-- QUERY 7
SELECT 
CONCAT(a.first_name, ' ', a.last_name) AS `name`,
a.actor_id, fa.film_id, f.title
FROM sakila.actor a
INNER JOIN sakila.film_actor fa
ON a.actor_id = fa.actor_id
INNER JOIN sakila.film f
ON fa.film_id = f.film_id;