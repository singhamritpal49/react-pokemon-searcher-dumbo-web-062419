import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    // console.log(this.props);

    const pokemon = this.props.pokemons.map(pokemon => {
      return <PokemonCard pokemon={pokemon}
        key={pokemon.id} />
    })
    return (
      <Card.Group itemsPerRow={6}>
        <h1>Hello From Pokemon Collection</h1>
        {pokemon}
      </Card.Group>
    )
  }
}

export default PokemonCollection
