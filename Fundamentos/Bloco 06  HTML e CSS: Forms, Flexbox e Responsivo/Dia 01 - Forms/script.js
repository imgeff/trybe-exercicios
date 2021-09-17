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
let buttonSubmit = document.querySelector('#submit');
function validateDate() {
  let inputDate = document.querySelector('#date-user');
  if (Number(inputDate.value.split('/')[0]) < 0 || Number(inputDate.value.split('/')[0]) > 31) {
    alert("Dia Inválido");
  } else if (Number(inputDate.value.split('/')[1]) < 0 || Number(inputDate.value.split('/')[1]) > 12) {
    alert('Mês Inválido');
  } else if (Number(inputDate.value.split('/')[2]) < 0) {
    alert('Ano Inválido');
  }
}
buttonSubmit.addEventListener('click', validateDate);

// Capturar Botão
// Criar Função
function preventButton (event) {
  event.preventDefault();
  if (document.querySelector('#name-complete').value.length > 40 || document.querySelector('#name-complete').value.length < 1) {
    alert('Insira entre 1 e 40 caracteres');
  }
}

buttonSubmit.addEventListener('click', preventButton)
// Validação manual
