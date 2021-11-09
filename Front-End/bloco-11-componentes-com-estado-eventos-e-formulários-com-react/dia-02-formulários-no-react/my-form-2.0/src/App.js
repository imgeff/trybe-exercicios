import './App.css';
import React from 'react';
import estados from './states';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      estados: estados,
      name: '',
      email: '',
      cpf: 0,
      address: '',
      city: '',
      estado: '',
      moradia: '',
      
    }
    this.handleChange = this.handleChange.bind(this);
  }

    handleChange({ target }) {
      const {name, value} = target;
      this.setState({
        [name]: value,
      })
    }

  render() {
    const {state: {
      estados
    }} = this;

    return (
      <form>
        <fieldset>
          <label htmlFor="name-user">Nome</label>
          <input id="name-user" type="text" name="name" maxLength="40" required placeholder="Digite seu Nome" value={this.state.name} onChange={this.handleChange}></input>
          <label htmlFor="email-user">Email</label>
          <input id="email-user" type="email" maxLength="50" name="email" required placeholder="Digite seu Email" value={this.state.email} onChange={this.handleChange}></input>
          <label htmlFor="name-user">CPF</label>
          <input id="cpf-user" type="text" maxLength="11"  name="cpf" required placeholder="Digite seu CPF" value={this.state.cpf} onChange={this.handleChange}></input>
          <label htmlFor="address-user">Endereço</label>
          <input id="address-user" type="text" maxLength="200" name="address" required placeholder="Digite seu Endereço" value={this.state.address} onChange={this.handleChange}></input>
          <label htmlFor="city-user">Cidade</label>
          <input id="city-user" type="text" maxLength="28" name="city" required placeholder="Digite sua Cidade" value={this.state.city} onChange={this.handleChange}></input>
          <label htmlFor="state-user">Estado</label>
          <select id="state-user" name="estado" onChange={this.handleChange}>
            {estados.map((estado) => (
              <option value={estado.sigla} name="estado" key={estado.sigla} >{estado.estado}</option>
            ))}
          </select>
          <label htmlFor="">Moradia:</label>
          <label htmlFor="house-user" >Casa</label>
          <input id="house-user" type="radio"  name="moradia" required value="casa" onChange={this.handleChange}/>
          <label htmlFor="appartment-user">Apartamento</label>
          <input id="appartment-user" type="radio"  name="moradia" required value="apartamento" onChange={this.handleChange} />


        </fieldset>
      </form>
    );
  }
}

export default App;
