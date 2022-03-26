const { getCep, create } = require('../models/cep.model');

const cepValidation = (cep) => {
  const lengthCep = cep.length;
  if (lengthCep !== 8) return false;
}

const getCepService = async (cep) => {
  const returnValidationCEP = cepValidation(cep);
  if (returnValidationCEP !== undefined) return 400;
  const cepReturn = await getCep(cep);
  if (cepReturn.length === 0) return 404;
  return cepReturn;
}

const createCEPService = async (cep, logradouro, bairro, localidade, uf) => {
  const cepReturn = await getCep(cep);
  if (cepReturn.length !== 0) return 409;
  return await create(cep, logradouro, bairro, localidade, uf);
}

module.exports = {
  getCepService,
  createCEPService,
}