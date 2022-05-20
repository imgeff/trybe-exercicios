import { randomUUID } from "crypto";
import IEmloyee from "./Interfaces/IEmployee";
import Subject from "./Subject";

const validations = (registration: string, salary: number, admisionDate: Date) => {
  const DateAdd: any = admisionDate;
  const currentDate: any = new Date();
  const validationDate = currentDate - DateAdd;

  if (registration.length < 16) throw new Error('O número de registro deve ter no mínimo 16 caracteres!');
  if (salary < 0) throw new Error('O Salário não pode ser negativo!');
  if (validationDate < 0 ) throw new Error('Data Inválida')
}

export default class Teacher  implements IEmloyee {
  registration: string;
  salary: number;
  admisionDate: Date;
  subject: Subject;

  constructor(registration: string, salary: number, admisionDate: Date, subject: Subject) {
    validations(registration, salary, admisionDate);
    this.registration = registration;
    this.salary = salary;
    this.admisionDate = admisionDate;
    this.subject = subject;
  }

  generateRegistration(): string {
    throw new Error("Method not implemented.");
  }

}