import { Car } from "./classes";
import { color, direction, door, pizza } from "./types";

const gol = new Car('volkswagen gol', color.SILVER, 4 );

gol.openTheDoor(door.FRONT_LEFT);
gol.closeTheDoor(door.FRONT_LEFT);
gol.turnOn();
gol.speedUp();
gol.speedDown();
gol.turn(direction.LEFT);
gol.speedUp();
gol.speedDown();
gol.turn(direction.RIGHT);
gol.speedUp();
gol.speedUp();
gol.speedDown();
gol.turn(direction.RIGHT);
gol.speedUp();
gol.speedDown();
gol.speedDown();
gol.turnOff();
gol.honk();
gol.openTheDoor(door.BACK_RIGHT);
gol.closeTheDoor(door.BACK_RIGHT);
gol.turnOn();
gol.speedUp();
gol.speedDown();
gol.turn(direction.RIGHT);
gol.speedUp();
gol.speedUp();
gol.speedUp();
gol.speedDown();
gol.turn(direction.LEFT);
gol.speedUp();
gol.speedDown();
gol.turn(direction.RIGHT);
gol.speedUp();
gol.speedDown();
gol.speedDown();
gol.turnOff();
gol.openTheDoor(door.BACK_RIGHT);
gol.closeTheDoor(door.BACK_RIGHT);
gol.turnOn();
gol.speedUp();

// exercício 3
const calabresa: pizza = {
  flavor: "Calabresa",
  slices: 8
}

console.log(calabresa);

const marguerita: pizza = {
  flavor: "Marguerita",
  slices: 6
}

console.log(marguerita);


const nutela: pizza = {
  flavor: "Nutela",
  slices: 4
}

console.log(nutela);
