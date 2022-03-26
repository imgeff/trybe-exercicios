const { getCepService, createCEPService } = require('../services/cep.service');

const getCEP = async (req, res) => {
  const { cep } = req.params;
  const invalidCep = { error: { code: 'invalidData', message: 'CEP inválido' }};
  const cepNotFound = { error: { code: 'notFound', message: 'CEP não encontrado'}};
  const cepReturn = await getCepService(cep);
  if (cepReturn === 400) return res.status(cepReturn).json(invalidCep);
  if (cepReturn === 404) return res.status(cepReturn).json(cepNotFound);
  return res.status(200).json(cepReturn);
}

const createCEP = async (req, res) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;
  const result = await createCEPService(cep, logradouro, bairro, localidade, uf);
  if (result === 409) return res.status(result).json({ error: { code: "alreadyExists", message: "CEP já existente" }});
  return res.status(201).json(result);
}

module.exports = {
  getCEP,
  createCEP,
}