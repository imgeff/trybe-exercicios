const fs = require('fs').promises;

const getSimpsons = async (_req, res) => {
try {
const fileContent = await fs.readFile('simpsons.json', 'utf-8');
const data = JSON.parse(fileContent);
return res.status(200).json(data)
} catch (error) {
console.error(error);
}
};

module.exports = getSimpsons; 