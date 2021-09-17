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
}

buttonSubmit.addEventListener('click', preventButton)
// Validação Nome
function validateName() {
  let inputName = document.querySelector('#name-complete').value;
  if (inputName.length > 40) {
    alert('Nome Inválido');
  }
}
buttonSubmit.addEventListener('click', validateName);

// Validação email
function validateEmail() {
  let inputEmail = document.querySelector('#email-user').value;
  if (inputEmail.length > 50) {
    alert('Email Inválido');
  }
}

buttonSubmit.addEventListener('click', validateEmail);

// Validação CPF
function validateCPF() {
  let inputCPF = document.querySelector('#cpf-number').value;
  if (inputCPF.length > 11) {
    alert('CPF Inválido');
  }
}
buttonSubmit.addEventListener('click', validateCPF);

// Validação Endereço
function validateAdress() {
  let inputAdress = document.querySelector('#endereco-user').value;
  if (inputAdress.length > 500) {
    alert('Endereço Inválido');
  }
}
buttonSubmit.addEventListener('click', validateAdress);

// Validação Cidade
function validateCity() {
  let inputCity = document.querySelector('#city-user').value;
  if (inputCity.length > 28) {
    alert('Cidade Inválida');
  }
}
buttonSubmit.addEventListener('click', validateCity);

// Validação Resumo do Currículo
function validateDescriptioCurriculo() {
  let inputCurriculo = document.querySelector('#resume-user').value;
  if (inputCurriculo.length > 1000) {
    alert('Descrição Inválida');
  }
}
buttonSubmit.addEventListener('click', validateDescriptioCurriculo);

// Validação Cargo
function validateCargo() {
  let inputCargo = document.querySelector('#cargo-user').value;
  if (inputCargo.length > 40) {
    alert('Cargo Inválido');
  }
}
buttonSubmit.addEventListener('click', validateCargo);

// Validação Descrição do Cargo
function validateDescriptionCargo() {
  let inputDsCargo = document.querySelector('#description-cargo').value;
  if (inputCPF.length > 500) {
    alert('Descrição Inválida');
  }
}
buttonSubmit.addEventListener('click', validateDescriptionCargo);