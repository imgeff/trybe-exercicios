-- QUERY 1
SELECT m.title, BO.domestic_sales, BO.international_sales 
FROM Pixar.Movies m
INNER JOIN Pixar.BoxOffice BO
ON m.id = BO.movie_id;
-- QUERY 2
SELECT m.title, BO.domestic_sales + BO.international_sales AS number_sales
FROM Pixar.Movies m
INNER JOIN Pixar.BoxOffice BO
ON m.id = BO.movie_id
WHERE BO.international_sales > BO.domestic_sales;
-- QUERY 3
SELECT m.title, BO.rating 
FROM Pixar.Movies m
INNER JOIN Pixar.BoxOffice BO
ON m.id = BO.movie_id
ORDER BY m.title DESC;
-- QUERY 4
SELECT t.*, m.*
FROM Pixar.Theater t
LEFT JOIN Pixar.Movies m
ON t.id = m.theater_id
ORDER BY t.name;