import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => {
        setPokemons(response.data.results);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredPokemons = pokemons.filter(pokemon => 
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Pokémon List</h1>
      <input 
        type="text" 
        placeholder="Search Pokémon" 
        value={search} 
        onChange={handleSearch} 
        className="search-bar"
      />
      <div className="pokemon-grid">
        {filteredPokemons.map((pokemon, index) => (
          <PokemonCard key={index} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
