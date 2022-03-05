-- QUERY 1
SELECT m.title, BO.domestic_sales, BO.international_sales 
FROM Pixar.Movies m
INNER JOIN Pixar.BoxOffice BO
ON m.id = BO.movie_id;