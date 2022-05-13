import { color, direction, door } from "./types";

// exercicio 1
export class Car {
  brand: string;
  color: color;
  doors: number;

  constructor(brand: string, color: color, doors: number,) {
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

  turnOn(): void {
    console.log(`${this.brand} ${this.color} de ${this.doors} portas Ligado!`);
  }

  turnOff(): void {
    console.log(`${this.brand} ${this.color} de ${this.doors} portas Desligado!`);
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