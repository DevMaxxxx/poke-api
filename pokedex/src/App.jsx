
    import { useState, useEffect } from "react";


    function App() { 
      
        const [pokemon, setPokemon] = useState('');
        const [pokemons, setPokemons] = useState([]);

        useEffect(() => {
          const fetchPokemonSpecies = async () => {
            fetch('https://pokeapi.co/api/v2/pokemon/', {
              method: "GET",
            
            },
          )
            .then((response) => response.json())
            .then((data) => {
              setPokemon(data.results)
            });
          }

          fetchPokemonSpecies();
      }, []);

      useEffect(() => {
        const fetchPromise = pokemon && pokemon.map(({url}) => fetch(url).then((res) => res.json()));

        Promise.all(fetchPromise)
        .then(responses => {
            const responseData = responses.map(response => response);
            const pokemonData =  responseData.map(item => {
                return {
                    name: item.name,
                    image: item.sprites.other.dream_world.front_default
                }
            });
            setPokemons(pokemonData);
        })
        
      }, [pokemon]);
      return (
        <div>
          {pokemons && pokemons.map((pokemonEntitie) =>
            <div key={pokemonEntitie.name}>
              <h1>{pokemonEntitie.name}</h1>
              <img src={pokemonEntitie.image} alt={pokemonEntitie.name} />
            </div>)}
          <h2>Pokedex Max</h2>
        </div>
      );
    }
    export default App;
      