const fs = require('fs').promises;
// Deve ser capaz de receber os parâmetros id e name no corpo da requisição.

// Deve ser capaz de adicionar um objeto com os dois parâmetros recebidos no arquivo simpsons.json.

// A resposta da requisição deve ser { message: 'Simpson criado com sucesso!' } com o status 201.

// Esse middleware deve ser chamado pela rota POST /simpsons.

const createSimpson = async (req, res) => {
  const { id, name } = req.body;
  try {
    const fileContent = await fs.readFile('simpsons.json', 'utf8');
    const data = JSON.parse(fileContent);
    data.push({ id, name });
    const dataJson = JSON.stringify(data);
    fs.writeFile('simpsons.json', dataJson);
    return res.status(201).json({ message: 'Simpson criado com sucesso!' });
  } catch (error) {
    console.error(error);
    }
}


module.exports = createSimpson;
