-- Exercício 1
SELECT MAX(SALARY) FROM hr.employees;
-- Exercício 2
SELECT MAX(SALARY) - MIN(SALARY) FROM hr.employees;
-- Exercício 3
SELECT JOB_ID, AVG(SALARY) AS MEDIA_SALARIAL FROM hr.employees
GROUP BY JOB_ID ORDER BY MEDIA_SALARIAL DESC;
-- Exercício 4
SELECT SUM(SALARY) AS TOTAL_SALARY FROM hr.employees;
-- Exercício 5
-- Exercício 6
-- Exercício 7
-- Exercício 8
-- Exercício 9
-- Exercício 10
-- Exercício 11
-- Exercício 12
-- Exercício 13
-- Exercício 14
-- Exercício 15
-- Exercício 16
-- Exercício 17
-- Exercício 18

