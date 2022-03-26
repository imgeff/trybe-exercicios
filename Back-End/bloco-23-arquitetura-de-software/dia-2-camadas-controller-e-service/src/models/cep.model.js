const connection = require('./MYSQL_CONNECTION');

const getCep = async (cep) => {
  try {
    const [ result ] = 
      await connection.execute('SELECT * FROM cep_lookup.ceps WHERE cep = ?', [cep]);
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = {
  getCep,
}