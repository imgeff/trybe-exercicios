const MoviesService = require('../services/movieService');

const create = async (req, res) => {
  const { title, directedBy, releaseYear } = req.body;

  const movie = await MoviesService
    .create({ title, directedBy, releaseYear });

  if (!movie) {
    return res
      .status(400)
      .send('Dados inválidos');
   }

  res
    .status(201)
    .send('Filme criado com sucesso!');
};

const getById = async (req, res) => {
  const { id } = req.params;
  const resultService = await MoviesService.getById(id);

  if (typeof resultService === 'string') return res.status(404).json(resultService);

  return res.status(200).json(resultService);
}

module.exports = {
  create,
  getById,
};