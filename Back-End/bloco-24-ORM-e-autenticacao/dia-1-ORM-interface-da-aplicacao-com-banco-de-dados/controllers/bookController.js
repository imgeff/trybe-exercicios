const req=require('express/lib/request');
const { Books } = require('../models');

const getAll = async (_req, res) => {
  try {
    const allBooks = await Books.findAll({ raw: true });
    return res.status(200).json(allBooks);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: 'Algo deu errado'});
  }
}

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Books.findByPk(id);
    return res.status(200).json(book);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: 'Algo deu errado'});
  }
}

module.exports = {
  getAll,
  getById
}