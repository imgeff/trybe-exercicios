const connection = require('./MYSQL_CONNECTION');

const getCep = async (cep) => {
  try {
    const [ result ] = 
      await connection.execute('SELECT * FROM cep_lookup.ceps WHERE cep = ?', [cep]);
    return result[0];
  } catch (error) {
    console.error(error);
    throw error;
  }
}

const create = async (cep, logradouro, bairro, localidade, uf) => {
  await connection.execute(`
    INSERT INTO cep_lookup.ceps (cep, logradouro, bairro, localidade, uf) VALUES(?, ?, ?, ?, ?)
  `, [cep, logradouro, bairro, localidade, uf]);

  const result = getCep(cep);
  return result[0];
}

module.exports = {
  getCep,
  create,
}