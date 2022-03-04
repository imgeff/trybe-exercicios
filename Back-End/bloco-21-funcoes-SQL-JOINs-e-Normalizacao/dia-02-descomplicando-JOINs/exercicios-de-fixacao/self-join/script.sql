-- QUERY 1
SELECT
    CONCAT(Employee.FIRST_NAME, " ", Employee.LAST_NAME) AS "Nome da Pessoa Colaboradora",
    CONCAT(Manager.FIRST_NAME, " ", Manager.LAST_NAME) AS "Nome Gerente"
FROM
    hr.employees AS Employee
INNER JOIN
    hr.employees AS Manager ON Employee.MANAGER_ID = Manager.EMPLOYEE_ID
WHERE Employee.DEPARTMENT_ID <> Manager.DEPARTMENT_ID;