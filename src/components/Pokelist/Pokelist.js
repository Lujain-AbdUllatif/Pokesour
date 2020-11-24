import React from "react";
import Pokeitem from "../Pokeitem/Pokeitem";
import "./Pokelist.css";

function Pokelist(props) {
  const {
    pokeData: { results },
    filterword = "",
  } = props;

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
              index={index + 1}
            />
          ))}
      </ul>
    </div>
  );
}
export default Pokelist;
