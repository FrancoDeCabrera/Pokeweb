import React from "react";
import Card from "./card";

export default function Cards({ pokemons, onLoad }) {
  // console.log(pokemons[0]);

  function load() {
    onLoad();
  }

  return (
    <>
      {pokemons.map((poke) => (
        <Card
          key={poke.name}
          name={poke.name}
          img={poke.sprites.front_default}
          type={poke.types}
        />
      ))}
      <button onClick={load}>Cargar mas Pokemons</button>
    </>
  );
}
