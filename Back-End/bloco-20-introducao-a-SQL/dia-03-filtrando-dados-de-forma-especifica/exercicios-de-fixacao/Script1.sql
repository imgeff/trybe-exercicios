#EXERCICIO 1
SELECT * FROM PecasFornecedores.Pecas WHERE name  LIKE "GR%";
#EXERCICIO 2
SELECT * FROM PecasFornecedores.Fornecimentos WHERE code = 2 ORDER BY Fornecedor;
#EXERCICIO 3
SELECT peca, Fornecedor, Preco FROM PecasFornecedores.Fornecimentos WHERE Fornecedor LIKE "%N%";
#EXERCICIO 4
SELECT * FROM PecasFornecedores.Fornecedores WHERE name LIKE "%LTDA" ORDER BY name DESC;
#EXERCICIO 5
SELECT COUNT(name) FROM PecasFornecedores.Fornecedores WHERE name LIKE "%F%";
#EXERCICIO 6
SELECT * FROM PecasFornecedores.Fornecimentos WHERE Preco BETWEEN 16 AND 39 ORDER BY Preco;
#EXERCICIO 7
SELECT COUNT(quantity)  AS "Total de Vendas" FROM PecasFornecedores.Vendas WHERE order_date BETWEEN "2018/04/15 00:00:00" AND "2019/07/30 23:59:59";