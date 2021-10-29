import React from "react";
import Pokemons from './data';
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
  render() {
    return (
      <main>
        <section className= "section-title"> 
        <h1>Pokedex</h1>
        </section>
        {Pokemons.map((pokemon) => (
          <Pokemon key={pokemon.id} pokemon={pokemon}/>
        ))}
      </main>
    );
  }
}

export default Pokedex;