-- QUERY 1
SELECT act.actor_id, act.first_name, act.last_name, fact.film_id
FROM sakila.actor act
INNER JOIN sakila.film_actor fact
ON act.actor_id = fact.actor_id;
-- QUERY 2
-- QUERY 3
-- QUERY 4
-- QUERY 5
-- QUERY 6
-- QUERY 7