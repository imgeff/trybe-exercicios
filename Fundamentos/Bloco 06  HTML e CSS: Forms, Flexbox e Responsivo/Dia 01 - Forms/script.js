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
let buttonSbmt = document.querySelector('#submit')
let inputDateDay = document.querySelector('#date-day');
let inputDateMonth = document.querySelector('#date-month');
let inputDateYear = document.querySelector('#date-year');
function verificatioData () {
  if (Number(inputDateDay.value) < 0 || Number(inputDateDay.value) > 31) {
    alert('insira um dia Valído!')
  } else if (Number(inputDateMonth.value) < 0 || Number(inputDateMonth.value) > 12) {
    alert('Insira um Mês Valído')
  } else if (Number(inputDateYear.value) < 0) {
    alert('insira um Ano Valído')
  }
}

buttonSbmt.addEventListener('click', verificatioData);