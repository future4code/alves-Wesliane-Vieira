import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import PokeCard from "./components/PokeCard";

function App() {
  const [pokeList, setPokeList] = useState([])
  const [pokeName, setPokeName] = useState("")

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
     .then((res) => {
      setPokeList(res.data.results);
      })
     .catch((err) => {
       console.log(err);
      });
   }, []);


  const changePokeName = (event) => {
    setPokeName(event.target.value)
  };

  
  const pokeOptions = pokeList.map(pokemon => {
     return (
       <option key={pokemon.name} value={pokemon.name}>
         {pokeName}
       </option>
     );
   });

  // Passo 4a
  const pokemon = true && <PokeCard />;

  return (
    <>
      <header>
        <h1>Exibir Pokémon</h1>
      </header>
      <hr />
      <nav>
        <label htmlFor={"select-pokemon"}>Selecione um pokemon: </label>
         {changePokeName}
        <select id={"select-pokemon"} >
          console.log("testando");
          {setPokeName}
          {pokeOptions}
        </select>
      </nav>
      <main>
        {pokemon}
      </main>
    </>
  );
};

export default App;
