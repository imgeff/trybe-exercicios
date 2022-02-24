#EXERCICIO 1
SELECT email FROM sakila.customer
WHERE email = "LEONARD.SCHOFIELD@sakilacustomer.org";
#EXERCICIO 2
SELECT first_name, last_name FROM sakila.customer
WHERE active = 0 
AND store_id = 2 
AND first_name <> "KENNETH"
ORDER BY first_name;
#EXERCICIO 3
SELECT title, description, release_year, replacement_cost FROM sakila.film
WHERE rating <> "NC-17" 
AND rating <> "R"
AND replacement_cost > 18
ORDER BY replacement_cost DESC, title;
#EXERCICIO 4
SELECT COUNT(first_name) FROM sakila.customer WHERE active = 1 AND store_id = 1;
#EXERCICIO 5
SELECT * FROM sakila.customer WHERE active = 0 AND store_id = 1;
#EXERCICIO 6
SELECT * FROM sakila.film 
WHERE rating  = "NC-17"
ORDER BY rental_rate, title
LIMIT 50;