import { useState } from "react";
import "./App.css";

function App() {
  const [pokemons, setPokemons] = useState([]);

  function search() {
    fetch(`https://pokeapi.co/api/v2/pokemon/5`)
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          // const poke = {
          // };
          // setPokemons((oldCities) => [...oldCities, recurso]);
        } else {
          // alert("Ciudad no encontrada");
        }
        console.log(recurso.sprites.front_default);
      });
  }
  search();
  return <></>;
}

export default App;
