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

  totalPedido () {
    const pedidoItems = this.items;
    let total: number = 0;
    pedidoItems.forEach((item) => total += item.preco )
    return total;
  }

  descontoPedido () {
    const total = this.totalPedido();
    const totalComDesconto = total - (total * this.percentual);
    return totalComDesconto;
  }
}

export default Pedido;