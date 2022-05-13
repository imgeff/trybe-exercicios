"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
class Car {
    constructor(brand, color, doors) {
        this.brand = brand;
        this.doors = doors;
        this.color = color;
    }
    honk() {
        console.log('PEMP PEMP');
    }
    openTheDoor(door) {
        console.log(`Abre a ${door}`);
    }
    closeTheDoor(door) {
        console.log(`Fecha a ${door}`);
    }
    turnOn() {
        console.log(`${this.brand} ${this.color} de ${this.doors} portas Ligado!`);
    }
    turnOff() {
        console.log(`${this.brand} ${this.color} de ${this.doors} portas Desligado!`);
    }
    speedUp() {
        console.log('Acelerando...');
    }
    speedDown() {
        console.log('Diminuindo a velocidade...');
    }
    stop() {
        console.log('Parando o carro...');
    }
    turn(direction) {
        console.log(`Virando o  carro para a ${direction}`);
    }
}
exports.Car = Car;
//# sourceMappingURL=classes.js.map