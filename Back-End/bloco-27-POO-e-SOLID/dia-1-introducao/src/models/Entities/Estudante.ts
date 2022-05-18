interface Notas {
  prova1: number;
  prova2: number;
  prova3: number;
  prova4: number;
  trabalho1: number;
  trabalho2: number;
}

class Estudante {
  matricula: number;
  nome: string;
  notas: Notas;

  constructor (matricula: number, nome: string, notas: Notas) {
    this.matricula = matricula;
    this.nome = nome;
    this.notas = notas;
  }

  somaNotas (): number {
    const notasArr: number[] = Object.values(this.notas);
    let soma: number = 0;
    notasArr.forEach((nota) => soma+= nota);
    return soma;
  }

  mediaNotas (): number {
    const media: number = this.somaNotas() / 6;
    return media;
  }
}

export default Estudante;