import React, { useState, useEffect } from "react";
import Pokeitem from "../Pokeitem/Pokeitem";
import "./Pokelist.css";

function Pokelist(props) {
  const {
    pokeData: { results },
    filterword = "",
  } = props;

  useEffect(() => {}, [filterword]);

  return (
    <div>
      <ul className="pokelist">
        {results
          .filter((pokemon) => pokemon.name.includes(filterword))
          .map((pokdata, index) => (
            <Pokeitem
              className="carddata"
              objectpokemon={pokdata}
              key={index}
            />
          ))}
      </ul>
    </div>
  );
}
export default Pokelist;
