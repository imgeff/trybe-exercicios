class Item {
  nomeDoPedido: string;
  preco: number;
  constructor (nomeDoPedido: string, preco: number) {
    this.nomeDoPedido = nomeDoPedido;
    this.preco = preco;
  }
}

export default Item;