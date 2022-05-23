import Employee from "./Employee";
import Subject from "./Subject";

export default class Teacher extends Employee {
  subject: Subject;

  constructor(name: string, salary: number, birthDate: string, subject: Subject) {
    super(name, birthDate, salary);
    this.subject = subject;
  }

}

const math  = new Subject('Matemática');
const fernanda = new Teacher('fernanda', 2000, '1990-05-10', math);

console.log(fernanda);