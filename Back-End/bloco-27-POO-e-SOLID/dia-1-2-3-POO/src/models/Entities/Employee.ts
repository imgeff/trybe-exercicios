import { randomUUID } from "crypto";
import IEnrollable from "./Interfaces/IEnrollable";
import Person from "./Person";

export default class Employee extends Person implements IEnrollable {
  protected _enrollment: string;
  protected _salary: number = 0;
  protected _admissionDate: string = Date();

  constructor(name: string, birthDate: string, salary: number) {
    super(name, birthDate);
    this.salary = salary;
    this._enrollment = this.generateEnrollment();
  }

  public get admissionDate () {
    return this._admissionDate;
  }

  public get salary () {
    return this._salary;
  }

  public get enrollment () {
    return this._enrollment;
  }

  public set salary (salary: number) {
    if (salary < 0 ) throw new Error('O salário não pode ser negativo!')
    this._salary = salary;
  }

  public generateEnrollment(): string {
    return randomUUID();
  }

}