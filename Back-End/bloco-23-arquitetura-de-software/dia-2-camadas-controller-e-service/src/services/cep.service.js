const { getCep } = require('../models/cep.model');

const cepValidation = (cep) => {
  const lengthCep = cep.length;
  if (lengthCep !== 8) return false;
}

const getCepService = async (cep) => {
  const returnValidationCEP = cepValidation(cep);
  if (returnValidationCEP !== undefined) return 400;
  const cepReturn = await getCep(cep);;
  if (cepReturn.length === 0) return 404;
  return cepReturn;
}

module.exports = {
  getCepService,
}