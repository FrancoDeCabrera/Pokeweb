import React from "react";

export default function Card({ name, img, type }) {
  console.log(type[0].type);

  return (
    <>
      <h1>{name}</h1>
      <img src={img} />
      {type.map((type, i) => (
        <h4 key={`${i} ${type.type.name}`}>{type.type.name}</h4> // mejorar la key de los elementos
      ))}
    </>
  );
}
