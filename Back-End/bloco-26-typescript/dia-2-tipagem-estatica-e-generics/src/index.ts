// exercicio 1
enum color {
  BLACK = 'preta',
  WHITE = 'branca',
  RED = 'vermelha',
  SILVER = 'prata'
}

enum door {
  FRONT_RIGHT = 'porta da frente direita',
  FRONT_LEFT = 'porta da frente esquerda',
  BACK_LEFT = 'porta de trás esquerda',
  BACK_RIGHT = 'porta de trás direita'
}

enum direction {
  LEFT = 'esquerda',
  RIGHT = 'direita'
}

class Car {
  brand: string;
  doors: number;
  color: color;

  constructor(brand: string, doors: number, color: color) {
    this.brand = brand;
    this.doors = doors;
    this.color = color;
  }

  honk(): void {
    console.log('PEMP PEMP');
  }

  openTheDoor(door: door): void {
    console.log(`Abre a ${door}`);
  }

  closeTheDoor(door: door): void {
    console.log(`Fecha a ${door}`);
  }

  turnOn(brand: string, doors: number, color: color): void {
    console.log(`${brand} ${color} de ${doors} portas Ligado!`);
  }

  turnOff(brand: string, doors: number, color: color): void {
    console.log(`${brand} ${color} de ${doors} portas Desligado!`);
  }

  speedUp(): void {
    console.log('Acelerando...');
  }

  speedDown(): void{
    console.log('Diminuindo a velocidade...');
  }

  stop(): void {
    console.log('Parando o carro...');
  }

  turn(direction: direction): void {
    console.log(`Virando o  carro para a ${direction}`);
  }
}