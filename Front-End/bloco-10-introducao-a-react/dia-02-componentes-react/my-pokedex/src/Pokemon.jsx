import React from "react";
import PropTypes from 'prop-types'
class Pokemon extends React.Component {
  render() {

    const {name, type, averageWeight, image} = this.props.pokemon;

    return(
      <section className= 'pokemon-section'>
        <p className= 'pokemon-info'>Name: {name}</p>
        <p className= 'pokemon-info'>Type: {type}</p>
        <p className= 'pokemon-info'>Weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
        <img src={image} alt={name} className= 'pokemon-image'/>
      </section>
    );
  }
}


export default Pokemon;