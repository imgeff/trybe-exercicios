import { IAirplane } from "./interfaces/IVehicle";

export default class Car implements IAirplane {
  fly(): void { console.log('Flying a futuristic car'); }
}