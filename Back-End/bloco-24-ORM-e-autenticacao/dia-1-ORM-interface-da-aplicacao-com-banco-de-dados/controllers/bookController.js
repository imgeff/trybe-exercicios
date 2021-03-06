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

const create = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const newBook = await Books.create({ title, author, pageQuantity });
    return res.status(200).json(newBook);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: 'Algo deu errado'});
  }
}

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, pageQuantity } = req.body;
    const newBook = await Books.update({ title, author, pageQuantity }, { where: { id } });
    return res.status(200).json(newBook);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: 'Algo deu errado'});
  }
}

const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    const destroyBook = await Books.destroy({ where: { id } });
    return res.status(200).json(destroyBook);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: 'Algo deu errado'});
  }
}

module.exports = {
  getAll,
  getById, 
  create,
  update,
  destroy,
}