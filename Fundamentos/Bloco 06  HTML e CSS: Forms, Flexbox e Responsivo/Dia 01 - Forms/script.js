// select -  estado 
let select = document.querySelector('#estado-user');
let estados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins', '*Distrito Federal'];
let siglas = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO', 'DF'];
for (let index = 0; index <= 26; index += 1) {
  let option = document.createElement('option');
  option.value = siglas[index];
  option.innerText = estados[index];
  select.appendChild(option);
}

// date
let inputDate = document.querySelector('#date-start').value;
if (inputDate === "") {
  alert('insira uma data Valída!')
}
