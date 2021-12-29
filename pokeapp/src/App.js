import { useEffect, useState } from "react";
import "./App.css";
import Cards from "./components/cards";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [cargar, setCargar] = useState(`https://pokeapi.co/api/v2/pokemon`);

  const getAllPokemons = async () => {
    const res = await fetch(cargar);
    const data = await res.json();

    setCargar(data.next);

    function crearObjetoPokemon(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();

        setPokemons((currentList) => [...currentList, data]);
      });
    }
    crearObjetoPokemon(data.results);
    // await console.log(pokemons);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <>
      <Cards pokemons={pokemons} onLoad={getAllPokemons}></Cards>
    </>
  );
}

export default App;
