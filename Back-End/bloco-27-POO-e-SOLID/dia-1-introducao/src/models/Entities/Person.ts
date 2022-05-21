export default abstract class Person {
  protected _name: string = '';
  protected _birthDate: string = '01-01-1970';

  constructor (name: string, birthDate: string) {
    if (name.length < 3) {
      throw new Error('O nome deve ter no mínimo 3 caracteres');
    }
    this._name = name;
    this._birthDate = birthDate;
  }

  get name () {
    return this._name;
  }

  get birthDate() {
    return this._birthDate;
  }

  set name (name: string) {
    this._name = name;
  }

  private set birthDate (birthDate: string) {
    const birthDateNumber: any = new Date(birthDate);
    const currentDate: any = new Date();
    const limitDate: number = -3786822706588;
    const validationDate = currentDate - birthDateNumber;
    if (validationDate < 0 || validationDate <  limitDate) throw new Error('Data Inválida');
    this._birthDate = birthDate;
  }

}