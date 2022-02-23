#EXERCICIO 1
SELECT "This is SQL Exercise, Practice and Solution";
#EXERCICIO 2
SELECT 3, 4, 5;
#EXERCICIO 3
SELECT 10 + 15;
#EXERCICIO 4
SELECT (2+3) * 4;
#EXERCICIO 5
SELECT * FROM Scientists.Scientists;
#EXERCICIO 6
SELECT Name AS "Nome do Projeto", Hours AS "Tempo de Trabalho" FROM Scientists.Projects;
#EXERCICIO 7
SELECT Name FROM Scientists.Scientists ORDER BY Name;
#EXERCICIO 8
SELECT Name FROM Scientists.Projects ORDER BY Name DESC;
#EXERCICIO 9
SELECT "O projeto ", Name, " precisou de ", Hours, " horas para ser concluído." AS "Relatório de Entrega" FROM Scientists.Projects;
#EXERCICIO 10
SELECT Name, Hours FROM Scientists.Projects ORDER BY Hours DESC LIMIT 3;
#EXERCICIO 11
SELECT DISTINCT Project FROM Scientists.AssignedTo;
#EXERCICIO 12
SELECT Name FROM Scientists.Projects ORDER BY Hours DESC LIMIT 1;
#EXERCICIO 13
SELECT Name FROM Scientists.Projects ORDER BY Hours LIMIT 1 OFFSET 1;
#EXERCICIO 14
SELECT * FROM Scientists.Projects ORDER BY Hours LIMIT 5;
#EXERCICIO 15
SELECT CONCAT("Existem ", COUNT(Name), " cientistas na tabela Scientists.") FROM Scientists.Scientists;