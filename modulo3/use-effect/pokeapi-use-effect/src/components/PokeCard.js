import axios from "axios";
import { useEffect, useState } from "react";

function PokeCard(props) {
  const [pokemon, setPokemon] = useState({})
  
  useEffect((pokeName) => {
    axios
       .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then((res) => {
        setPokemon(res.data);
       })
       .catch((err) => {
         console.error("Erro ao buscar detalhes do pokemon")
       });
  }, []);

  useEffect((pokeName) => {
    if ( pokemon !== {}) {
      axios
       .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then((res) => {
        setPokemon(res.data);
       })
       .catch((err) => {
         console.error("Erro ao buscar detalhes do pokemon")
       });
     
    };
   }, [pokemon])

  

  return (
    <figure>
      {pokemon.name}
      <strong>Nome do Pokémon</strong>
      {pokemon.weight}
      <p>Peso: 1000 Kg</p>
      {pokemon.types}
      <p>Tipo: Fire</p>
      {pokemon.sprites}
      {true && (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      )}
    </figure>
  );
};

export default PokeCard;
