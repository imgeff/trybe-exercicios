// ./FuturisticCar.ts
import { IFuturisticCar } from './interfaces/IVehicle';

export default class FuturisticCar implements IFuturisticCar {
  drive(): void { console.log('Drive a futuristic car'); }

  fly(): void { console.log('Flying a futuristic car'); }
}