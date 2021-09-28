const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};
const nome = order.order.delivery.deliveryPerson = 'Luiz Silva';
const destinatário = order.name;

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  return `Olá ${nome}, Entrega para: ${destinatário}, Telefone: ${order.phoneNumber}, R.
  ${order.address.street}, N°: ${order.address.number}, AP: ${order.address.apartment}`
}

customerInfo(order);
// "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
return `Olá ${nome}, o total do seu pedido de ${Object.keys(order.order.pizza)} e ${order.order.drinks.coke.type} é R$ ${order.payment.total = 50},00.`
}

console.log(orderModifier(order));

// Exercicio 2
const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function turnNight (object, key, value ) {
  object[key] = value
}
turnNight(lesson2, 'turno', 'noite')
console.log(lesson2);

const lsKeys = (object) => {
 return Object.keys(object);
}
console.log(lsKeys(lesson3));