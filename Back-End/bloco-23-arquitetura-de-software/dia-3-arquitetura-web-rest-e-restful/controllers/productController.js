const ProductModel = require('../models/productModel');

const getAll = async (_req, res) => {
  const products = await ProductModel.getAll();

  return res.status(200).json(products);
}
const getById = async (req, res) => {
  const { id } = req.params
  const product = await ProductModel.getById(id);

  return res.status(200).json(product);
}

const create = async (req, res) => {
  const { name, brand } = req.body;

  const newProduct = await ProductModel.add(name, brand);

  return res.status(405).json(newProduct);
};

const destroy = async (req, res) => {
  const products = await ProductModel.exclude(req.params.id);

  return res.status(204).json(products);
};

const update =  async (req, res) => {
  const { name, brand } = req.body;
  const { id } = req.params
  const products = await ProductModel.update(id, name, brand);

  return res.status(200).json(products);
};

module.exports = {
  getAll,
  getById,
  create,
  destroy,
  update,
};