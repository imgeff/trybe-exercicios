export default interface IEmloyee {
  registration: string;
  salary: number;
  admisionDate: Date;
  generateRegistration(): string;
}