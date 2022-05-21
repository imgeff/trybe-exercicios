import { randomUUID } from "crypto";
import IEnrollable from "./Interfaces/IEnrollable";
import Person from "./Person";


export default class Student extends Person implements IEnrollable {
  private _enrollment: string;
  private _examsGrades: number[] = [];
  private _worksGrades: number[] = [];

  constructor (name: string, birthDate: string) {
    super(name, birthDate);
    this._enrollment = this.generateEnrollment();
  }

  public get enrollment () {
    return this._enrollment;
  }

  public get examsGrades () {
    return this._examsGrades;
  }

  public get worksGrades () {
    return this._worksGrades;
  }

  public set examsGrades (examsGrades: number[]) {
    if (examsGrades.length > 4) throw new Error('O máximo é 4 notas de provas');
    this._examsGrades = examsGrades;
  }

  public set worksGrades (worksGrades: number[]) {
    if (worksGrades.length > 2) throw new Error('O máximo é 2 notas de trabalho');
    this._worksGrades = worksGrades;
  }

  public generateEnrollment() {
    return randomUUID();
  }

  public somaNotas (): number {
    const notasArr: number[] = this._examsGrades.concat(this._worksGrades);
    let soma: number = 0;
    notasArr.forEach((nota) => soma+= nota);
    return soma;
  }

  public mediaNotas (): number {
    const media: number = this.somaNotas() / 6;
    return media;
  }
}

const amendoim = new Student('amendoim', '2004-05-18');
const tubarao = new Student('tubarao', '1995-08-23');
const taissin = new Student('taissin', '1980-11-25');
const atilla = new Student('atilla', '1995-06-04');
const fael = new Student('fael', '1990-01-17');

console.log(fael);