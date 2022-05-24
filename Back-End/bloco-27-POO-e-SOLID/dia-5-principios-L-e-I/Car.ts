import { ICar } from "./interfaces/IVehicle";

export default class Car implements ICar {
  drive(): void { console.log('Drive a futuristic car'); }
}
