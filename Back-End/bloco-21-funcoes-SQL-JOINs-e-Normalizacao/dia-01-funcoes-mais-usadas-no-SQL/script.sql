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
SELECT  DEPARTMENT_ID, AVG(SALARY), COUNT(*) AS 'COUNT_DPT'  FROM hr.employees
GROUP BY DEPARTMENT_ID
HAVING COUNT_DPT > 10;
-- Exercício 11
UPDATE hr.employees
SET PHONE_NUMBER = REPLACE(PHONE_NUMBER, '515', '777')
WHERE PHONE_NUMBER LIKE('515%');
-- Exercício 12
SELECT * FROM hr.employees
WHERE CHAR_LENGTH(FIRST_NAME) >= 8;
-- Exercício 13
SELECT EMPLOYEE_ID, FIRST_NAME, YEAR(HIRE_DATE) FROM hr.employees;
-- Exercício 14
SELECT EMPLOYEE_ID, FIRST_NAME, DAY(HIRE_DATE) FROM hr.employees;
-- Exercício 15
SELECT EMPLOYEE_ID, FIRST_NAME, MONTH(HIRE_DATE) FROM hr.employees;
-- Exercício 16
SELECT UCASE(FIRST_NAME), UCASE(LAST_NAME) FROM hr.employees;
-- Exercício 17
SELECT LAST_NAME, HIRE_DATE FROM hr.employees
WHERE MONTH(HIRE_DATE) = 7 AND YEAR(HIRE_DATE) = 1987;
-- Exercício 18
SELECT FIRST_NAME, LAST_NAME, DATEDIFF(CURRENT_DATE(), LEFT(HIRE_DATE, 10) ) FROM hr.employees;

