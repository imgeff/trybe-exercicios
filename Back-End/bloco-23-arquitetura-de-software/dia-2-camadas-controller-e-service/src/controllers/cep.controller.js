const { getCepService } = require('../services/cep.service');

const getCepController = async (req, res) => {
  const { cep } = req.params;
  const invalidCep = { error: { code: 'invalidData', message: 'CEP inválido' }};
  const cepNotFound = { error: { code: 'notFound', message: 'CEP não encontrado'}};
  const cepReturn = await getCepService(cep);
  if (cepReturn === 400) return res.status(cepReturn).json(invalidCep);
  if (cepReturn === 404) return res.status(cepReturn).json(cepNotFound);
  return res.status(200).json(cepReturn);
}

module.exports = {
  getCepController,
}