const fs = require("fs").promises;
// Crie um middleware no arquivo middlewares/getSimpsonById.js seguindo as seguintes especifições:

// Deve receber o id como parâmetro de rota;

// Se existir um simpson correspondente ao id passado a resposta da requisição deve ter o status 200 e retornar o objeto do simpson como json.

// Se não existir um simpson correspondente ao id passado a resposta da requisição deve ter o status 404 e retornar o seguinte json: { message: 'Simpson not found!'}

// Esse middleware deve ser acessível através da rota GET /simpsons/:id

const getSimpsonsById = async (req, res) => {
  try {
    const { id } = req.params;
    const fileContent = await fs.readFile("simpsons.json", "utf-8");
    const data = JSON.parse(fileContent);
    const found = data.find((simpson) =>  simpson.id  === parseInt(id));
    if (!found) return res.status(404).json({ message: 'Simpson not found!'})
    return res.status(200).json(found);
  } catch (error) {
    console.error(error);
  }
};

module.exports = getSimpsonsById;
