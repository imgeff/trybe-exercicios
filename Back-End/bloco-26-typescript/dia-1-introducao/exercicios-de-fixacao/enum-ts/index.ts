enum weekDays {
  Domingo = 1,
  Segunda,
  Terca,
  Quarta,
  Quinta,
  Sexta,
  Sabado,
};

enum rainbowColors {
  Red = 'Vermelho',
  Orange = 'Laranja',
  Yellow = 'Amarelo',
  Green = 'Verde',
  Blue = 'Azul',
  Indigo = 'Indigo',
};

enum actionsPrint { 
  Salvar,
  Imprimir,
  Abrir,
  Visualizar,
  Fechar
};

enum cardealPoints {
  Norte = 'N',
  Leste = 'L',
  Sul = 'S',
  Oeste = 'O'
}

console.log(`${weekDays[2]} visto roupas de tom ${rainbowColors.Red} e começo a ${actionsPrint[2]} a janela olhando as ondas na direção ${cardealPoints['N']}`);