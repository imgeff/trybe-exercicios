var weekDays;
(function (weekDays) {
    weekDays[weekDays["Domingo"] = 1] = "Domingo";
    weekDays[weekDays["Segunda"] = 2] = "Segunda";
    weekDays[weekDays["Terca"] = 3] = "Terca";
    weekDays[weekDays["Quarta"] = 4] = "Quarta";
    weekDays[weekDays["Quinta"] = 5] = "Quinta";
    weekDays[weekDays["Sexta"] = 6] = "Sexta";
    weekDays[weekDays["Sabado"] = 7] = "Sabado";
})(weekDays || (weekDays = {}));
;
var rainbowColors;
(function (rainbowColors) {
    rainbowColors["Red"] = "Vermelho";
    rainbowColors["Orange"] = "Laranja";
    rainbowColors["Yellow"] = "Amarelo";
    rainbowColors["Green"] = "Verde";
    rainbowColors["Blue"] = "Azul";
    rainbowColors["Indigo"] = "Indigo";
})(rainbowColors || (rainbowColors = {}));
;
var actionsPrint;
(function (actionsPrint) {
    actionsPrint[actionsPrint["Salvar"] = 0] = "Salvar";
    actionsPrint[actionsPrint["Imprimir"] = 1] = "Imprimir";
    actionsPrint[actionsPrint["Abrir"] = 2] = "Abrir";
    actionsPrint[actionsPrint["Visualizar"] = 3] = "Visualizar";
    actionsPrint[actionsPrint["Fechar"] = 4] = "Fechar";
})(actionsPrint || (actionsPrint = {}));
;
var cardealPoints;
(function (cardealPoints) {
    cardealPoints["Norte"] = "N";
    cardealPoints["Leste"] = "L";
    cardealPoints["Sul"] = "S";
    cardealPoints["Oeste"] = "O";
})(cardealPoints || (cardealPoints = {}));
console.log("".concat(weekDays[2], " visto roupas de tom ").concat(rainbowColors.Red, " e come\u00E7o a ").concat(actionsPrint[2], " a janela olhando as ondas na dire\u00E7\u00E3o ").concat(cardealPoints['N']));
