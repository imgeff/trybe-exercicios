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
SELECT 
MAX(SALARY) AS MAIOR_SALARIO, 
MIN(SALARY) AS MENOR_SALARIO, 
SUM(SALARY) AS SUM_SALARY, 
ROUND(AVG(SALARY), 2) AS MEDIA_SALARIAL FROM hr.employees;
-- Exercício 6
SELECT COUNT(JOB_ID) FROM hr.employees
WHERE JOB_ID = 'IT_PROG';
-- Exercício 7
SELECT  JOB_ID, SUM(SALARY) FROM hr.employees GROUP BY JOB_ID;
-- Exercício 8
SELECT  JOB_ID, SUM(SALARY) FROM hr.employees
WHERE JOB_ID = 'IT_PROG'
GROUP BY JOB_ID;
-- Exercício 9
SELECT JOB_ID, AVG(SALARY) AS 'AVERAGE SALARY' FROM hr.employees
WHERE JOB_ID <> 'IT_PROG'
GROUP BY JOB_ID
ORDER BY 'AVERAGE SALARY' DESC;
-- Exercício 10
-- Exercício 11
-- Exercício 12
-- Exercício 13
-- Exercício 14
-- Exercício 15
-- Exercício 16
-- Exercício 17
-- Exercício 18

