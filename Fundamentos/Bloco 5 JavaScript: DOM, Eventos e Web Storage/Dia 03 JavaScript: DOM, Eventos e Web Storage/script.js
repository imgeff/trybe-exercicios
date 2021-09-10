function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Exercício 1.
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
function DaysOfCalendary () {
  let ul = document.querySelector('#days');  // recuperar Ul
  for (let index = 0; index < dezDaysList.length; index += 1) {
    if (dezDaysList[index] === 24 || dezDaysList[index] === 31) {
      let li = document.createElement('li');  // criar Li
      li.className = 'day holiday'; // Adicionar Classe a Li
      li.innerText = dezDaysList[index]; // Adiciona a posição index do array de Dias em Li
      ul.appendChild(li); // Adiciona Li filha de Ul 
    } else if (dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18) {
      let li = document.createElement('li');  // criar Li
      li.className = 'day friday'; // Adicionar Classe a Li
      li.innerText = dezDaysList[index]; // Adiciona a posição index do array de Dias em Li
      ul.appendChild(li); // Adiciona Li filha de Ul    

    } else if (dezDaysList[index] === 25) {
      let li = document.createElement('li');  // criar Li
      li.className = 'day holiday friday'; // Adicionar Classe a Li
      li.innerText = dezDaysList[index]; // Adiciona a posição index do array de Dias em Li
      ul.appendChild(li); // Adiciona Li filha de Ul 
    } else {
      let li = document.createElement('li');  // criar Li
      li.className = 'day'; // Adicionar Classe a Li
      li.innerText = dezDaysList[index]; // Adiciona a posição index do array de Dias em Li
      ul.appendChild(li); // Adiciona Li filha de Ul 
    }
  }
}
DaysOfCalendary ()
