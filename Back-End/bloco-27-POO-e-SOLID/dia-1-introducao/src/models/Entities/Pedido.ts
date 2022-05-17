import Cliente from './Cliente';
import Item from './Item';

class Pedido {
  cliente: Cliente;
  items: Item[];
  formaDePagamento: string;
  percentual: number;

  constructor (cliente: Cliente, items: Item[], formaDePagamento: string, percentual: number) {
    this.cliente = cliente;
    this.items = items;
    this.formaDePagamento = formaDePagamento;
    this.percentual = percentual;
  }
}

export default Pedido;