const { questionInt } = require('readline-sync');

const main = () => {
  const mensagem = (`
  Escolha um número para executar o script correspondente

    0 - Calcular IMC
    1 - Calcular velocidade média
    2 - Jogo de adivinhação
  
  `);

  const selectAPP = questionInt(mensagem);
  switch(selectAPP) {
    case 0:
      require('./IMC/index');
      break;
    case 1:
      require('./VM/velocidade');
      break;
    case 2:
      require('./adivinha-o-numero/index');
      break;
    default:
      console.log('Erro: Opção inválida!');
  }
}

main();
