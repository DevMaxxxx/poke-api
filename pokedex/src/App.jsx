
    import React, { useState, useEffect } from "react";


    function App() { 
      
        const [pokemon, setPokemon] = useState('');

        useEffect(() => {
          const fetchPokemonSpecies = async () => {
            fetch('https://pokeapi.co/api/v2/pokemon-species/', {
              method: "GET",
            
            },
          )
            .then((response) => response.json())
            .then((data) => {
              return data
            });
          }

          const arrayPokemon = fetchPokemonSpecies();
          console.log(arrayPokemon);
      }, []);
      return (
        <div>
          {pokemon && pokemon.map((pokemonEntitie) => <h1> {pokemonEntitie.name} </h1>)}
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="pokemon" />
          <h2>Pokedex Max</h2>
        </div>
      );
    }
    export default App;
    // const [images , setImages] = useState('');
    //useEffect(() => {
    // fetch( 'https://pokeapi.co/api/v2/pokemon/1/'  , {
    // method: "GET",
      