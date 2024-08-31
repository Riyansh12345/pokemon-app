import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PokemonCard = ({ pokemon }) => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    axios.get(pokemon.url)
      .then(response => {
        setPokemonData(response.data);
      })
      .catch(error => console.error('Error fetching Pokémon details:', error));
  }, [pokemon.url]);

  return (
    pokemonData ? (
      <div className="pokemon-card">
        <img 
          src={pokemonData.sprites.front_default} 
          alt={pokemon.name} 
        />
        <h3>{pokemon.name}</h3>
      </div>
    ) : (
      <p>Loading...</p>
    )
  );
};

export default PokemonCard;
