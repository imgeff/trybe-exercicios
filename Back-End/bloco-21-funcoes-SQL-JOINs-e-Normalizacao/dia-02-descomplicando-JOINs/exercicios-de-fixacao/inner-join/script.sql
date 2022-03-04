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
-- QUERY 4
-- QUERY 5
-- QUERY 6
-- QUERY 7