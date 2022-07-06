import axios from "axios";

function PokeCard(props) {
  // Passo 4b
  // Implementa suas variáveis de estado aqui.

  // Passo 4c
  // componentDidMount() {
  //   this.pegaPokemon(this.props.pokeName);
  // };

  // Passo 4c
  // componentDidUpdate(prevProps) {
  //   if (prevProps.pokeName !== this.props.pokeName) {
  //     this.pegaPokemon(this.props.pokeName);
  //   };
  // };

  // Passo 4c
  // pegaPokemon = (pokeName) => {
  //   axios
  //     .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
  //     .then((res) => {
  //       this.setState({ pokemon: res.data });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <figure>
      {/* Passo 4d */}
      <strong>Nome do Pokémon</strong>
      {/* Passo 4d */}
      <p>Peso: 1000 Kg</p>
      {/* Passo 4d */}
      <p>Tipo: Fire</p>
      {/* Passo 4d */}
      {true && (
        <img src={""} alt={"Nome do Pokémon"} />
      )}
    </figure>
  );
};

export default PokeCard;
