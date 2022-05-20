export default class Subject {
  private _name: string = '';

  constructor(name: string) {
    if (name.length < 3) throw new Error('O nome não pode ter menos que 3 caracteres!');
    this._name = name 
  }

  get name () { return this._name }
  set name (name: string) { this._name = name }
}

const math  = new Subject('Matemática');
const history = new Subject('História');
const biology = new Subject('Biologia');

console.log(biology);