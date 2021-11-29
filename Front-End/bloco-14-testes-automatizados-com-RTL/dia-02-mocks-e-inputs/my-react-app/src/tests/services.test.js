import { render, screen } from '@testing-library/react';
let { 
  retornaNumeroAleatorio, 
  conversorMaiusculo,
  retornaPrimeiraLetra,
  concatTwoStrings,
  requestDogAPI
} = require('../services')


describe("Função numero aleatório", () => {
  test('Testa se a função foi chamada, qual seu retorno e quantas vezes foi chamada', () => {
    retornaNumeroAleatorio = jest.fn().mockReturnValue(10);
    retornaNumeroAleatorio();
    expect(retornaNumeroAleatorio).toHaveBeenCalled()
    expect(retornaNumeroAleatorio).toHaveBeenCalledTimes(1)
    expect(retornaNumeroAleatorio()).toBe(10);
  });
  test('Testa se a função foi chamada e a nova implementação de divisão foi aplicada.', () => {
    retornaNumeroAleatorio = jest.fn().mockImplementationOnce((a, b) => a / b);
    expect(retornaNumeroAleatorio(10, 2)).toBe(5);
    expect(retornaNumeroAleatorio).toHaveBeenCalled()
    expect(retornaNumeroAleatorio(10, 5)).not.toBe(5)
  });
  test('Utilize o mock e desenvolva uma nova implementação que receba três parâmetros para multiplicação', () => {
    retornaNumeroAleatorio = jest.fn().mockImplementation((a, b, c) => a * b * c);
    expect(retornaNumeroAleatorio(10, 2, 2)).toBe(40);
    expect(retornaNumeroAleatorio).toHaveBeenCalled();
    expect(retornaNumeroAleatorio(10, 2, 1)).not.toBe(40);
  });
  test("Reseta a implementação do mock anterior", () => {
    retornaNumeroAleatorio.mockReset();
    retornaNumeroAleatorio = jest.fn().mockImplementation((a) => a * 2);
    expect(retornaNumeroAleatorio(2)).toBe(4);
    expect(retornaNumeroAleatorio).toHaveBeenCalledWith(2);
    expect(retornaNumeroAleatorio(5)).not.toBe(undefined);
  })
})

describe("Trabalhando com strings", () => {
  test("conversorMaiusculo deve retornar string em caixa baixa.", () => {
    conversorMaiusculo = jest.fn().mockImplementation((string) => string.toLowerCase());
    expect(conversorMaiusculo).toHaveBeenCalledTimes(0);
    expect(conversorMaiusculo('ENEM')).toBe('enem');
    expect(conversorMaiusculo('ENEM')).not.toBe('ENEM');
  })
  test("retornaPrimeiraLetra deve retornar última letra da string", () => {
    retornaPrimeiraLetra = jest.fn().mockImplementation((string) => string[string.length -1]);
    expect(retornaPrimeiraLetra).toHaveBeenCalledTimes(0);
    expect(retornaPrimeiraLetra('ENEM')).toBe('M');
    expect(retornaPrimeiraLetra('ENEM')).not.toBe('E');
  })
  test("concatTwoStrings deve Retornar 3 strings concatenadas", () => {
    concatTwoStrings = jest.fn().mockImplementation((stringA, stringB, stringC) => `${stringA}${stringB}${stringC}`);
    expect(concatTwoStrings).toHaveBeenCalledTimes(0);
    expect(concatTwoStrings('AU', 'TO', 'MÓVEL')).toBe('AUTOMÓVEL');
    expect(concatTwoStrings).toHaveBeenCalledWith('AU', 'TO', 'MÓVEL');
  })
  test("concatTwoStrings deve Retornar 2 strings concatenadas", () => {
    concatTwoStrings.mockReset();
    expect(concatTwoStrings).toHaveBeenCalledTimes(0);
    expect(concatTwoStrings('AUTO', 'MÓVEL')).toBe(undefined);
    expect(concatTwoStrings).toHaveBeenCalledWith('AUTO', 'MÓVEL');
  })
})

describe("Testa Dog Api", () => {
  test("Testa o Retorno de Dog Api", async () => {
    global.fetch = jest.fn().mockResolvedValue('request sucess')
    await expect(requestDogAPI()).resolves.toBe('request sucess')
  })
})
