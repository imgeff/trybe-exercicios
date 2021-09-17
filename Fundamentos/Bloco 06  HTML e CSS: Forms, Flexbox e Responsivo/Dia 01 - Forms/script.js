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
//Div pra dados 
let main = document.querySelector('main');
let dadosSucess = document.createElement('div');
let dadosErrors = document.createElement('div');
dadosErrors.id = 'error';
main.appendChild(dadosErrors);

// Capturar Botão
let buttonSubmit = document.querySelector('#submit');
// Criar Função
function preventButton (event) {
  event.preventDefault();
}

buttonSubmit.addEventListener('click', preventButton)
// Validação Nome
function validateName() {
  let inputName = document.querySelector('#name-complete').value;
  if (inputName.length > 40 || inputName < 1) {
    alert('Nome Inválido');
    dadosErrors.innerHTML = 'Dados Invalídos';
  } else {
    
    dadosSucess.id = 'dados';
    main.appendChild(dadosSucess);
    let p = document.createElement('p')
    p.innerHTML = inputName;
    dadosSucess.appendChild(p)
  }
}
buttonSubmit.addEventListener('click', validateName);

// Validação email
function validateEmail() {
  let inputEmail = document.querySelector('#email-user').value;
  if (inputEmail.length > 50 || inputEmail < 1) {
    alert('Email Inválido');
    dadosErrors.innerHTML = 'Dados Invalídos';
  } else {
    dadosSucess.id = 'dados';
    main.appendChild(dadosSucess);
    let p = document.createElement('p')
    p.innerHTML = inputEmail;
    dadosSucess.appendChild(p)
  }
}

buttonSubmit.addEventListener('click', validateEmail);

// Validação CPF
function validateCPF() {
  let inputCPF = document.querySelector('#cpf-number').value;
  if (inputCPF.length > 11 || inputCPF.length < 1) {
    alert('CPF Inválido');
    dadosErrors.innerHTML = 'Dados Invalídos';
  } else {
    dadosSucess.id = 'dados';
    main.appendChild(dadosSucess);
    let p = document.createElement('p')
    p.innerHTML = inputCPF;
    dadosSucess.appendChild(p)
  }
}
buttonSubmit.addEventListener('click', validateCPF);

// Validação Endereço
function validateAdress() {
  let inputAdress = document.querySelector('#endereco-user').value;
  if (inputAdress.length > 500 || inputAdress.length < 1) {
    alert('Endereço Inválido');
    dadosErrors.innerHTML = 'Dados Invalídos';
  } else {
    dadosSucess.id = 'dados';
    main.appendChild(dadosSucess);
    let p = document.createElement('p')
    p.innerHTML = inputAdress;
    dadosSucess.appendChild(p)
  }
}
buttonSubmit.addEventListener('click', validateAdress);

// Validação Cidade
function validateCity() {
  let inputCity = document.querySelector('#city-user').value;
  if (inputCity.length > 28 || inputCity.length < 1) {
    alert('Cidade Inválida');
    dadosErrors.innerHTML = 'Dados Invalídos';
  } else {
    dadosSucess.id = 'dados';
    main.appendChild(dadosSucess);
    let p = document.createElement('p')
    p.innerHTML = inputCity;
    dadosSucess.appendChild(p)
  }
}
buttonSubmit.addEventListener('click', validateCity);

// Validação Resumo do Currículo
function validateDescriptioCurriculo() {
  let inputCurriculo = document.querySelector('#resume-user').value;
  if (inputCurriculo.length > 1000 || inputCurriculo.length < 1) {
    alert('Descrição Inválida');
    dadosErrors.innerHTML = 'Dados Invalídos';
  } else {
    dadosSucess.id = 'dados';
    main.appendChild(dadosSucess);
    let p = document.createElement('p')
    p.innerHTML = inputCurriculo;
    dadosSucess.appendChild(p)
  }
}
buttonSubmit.addEventListener('click', validateDescriptioCurriculo);

// Validação Cargo
function validateCargo() {
  let inputCargo = document.querySelector('#cargo-user').value;
  if (inputCargo.length > 40 || inputCargo.length < 1) {
    alert('Cargo Inválido');
    dadosErrors.innerHTML = 'Dados Invalídos';
  } else {
    dadosSucess.id = 'dados';
    main.appendChild(dadosSucess);
    let p = document.createElement('p')
    p.innerHTML = inputCargo;
    dadosSucess.appendChild(p)
  }
}
buttonSubmit.addEventListener('click', validateCargo);

// Validação Descrição do Cargo
function validateDescriptionCargo() {
  let inputDsCargo = document.querySelector('#description-cargo').value;
  if (inputDsCargo.length > 500 || inputDsCargo.length < 1) {
    alert('Descrição Inválida');
    dadosErrors.innerHTML = 'Dados Invalídos';
  } else {
    dadosSucess.id = 'dados';
    main.appendChild(dadosSucess);
    let p = document.createElement('p')
    p.innerHTML = inputDsCargo;
    dadosSucess.appendChild(p)
  }
}
buttonSubmit.addEventListener('click', validateDescriptionCargo);
// date
function validateDate() {
  let inputDate = document.querySelector('#date-user');
  if (Number(inputDate.value.split('/')[0]) < 0 || Number(inputDate.value.split('/')[0]) > 31) {
    alert("Dia Inválido");
    dadosErrors.innerHTML = 'Data Inválida';
  } else if (Number(inputDate.value.split('/')[1]) < 0 || Number(inputDate.value.split('/')[1]) > 12) {
    alert('Mês Inválido');
    dadosErrors.innerHTML = 'Data Inválida';
  } else if (Number(inputDate.value.split('/')[2]) < 0) {
    alert('Ano Inválido');
    dadosErrors.innerHTML = 'Data Inválida';
  } else {
    
    dadosSucess.id = 'dados';
    main.appendChild(dadosSucess);
    let p = document.createElement('p')
    p.innerHTML = inputDate.value;
    dadosSucess.appendChild(p)
  }
}
buttonSubmit.addEventListener('click', validateDate);

function divDados() {
  if (dadosErrors.innerText !== '')
dadosSucess.innerText = '';
}

buttonSubmit.addEventListener('click', divDados);