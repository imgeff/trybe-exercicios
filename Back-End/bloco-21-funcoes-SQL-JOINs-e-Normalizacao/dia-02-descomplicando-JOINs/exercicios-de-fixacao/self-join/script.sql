-- QUERY 1
SELECT
    CONCAT(Employee.FIRST_NAME, " ", Employee.LAST_NAME) AS "Nome da Pessoa Colaboradora",
    CONCAT(Manager.FIRST_NAME, " ", Manager.LAST_NAME) AS "Nome Gerente"
FROM
    hr.employees AS Employee
INNER JOIN
    hr.employees AS Manager ON Employee.MANAGER_ID = Manager.EMPLOYEE_ID
WHERE Employee.DEPARTMENT_ID <> Manager.DEPARTMENT_ID;
-- QUERY 2
SELECT CONCAT(manager.FIRST_NAME, manager.LAST_NAME) AS NAME, COUNT(employee.EMPLOYEE_ID)
FROM hr.employees manager
INNER JOIN hr.employees employee
ON employee.MANAGER_ID = manager.EMPLOYEE_ID
GROUP BY manager.EMPLOYEE_ID;