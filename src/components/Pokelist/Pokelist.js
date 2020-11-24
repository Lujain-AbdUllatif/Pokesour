import React from "react";
import Pokeitem from "../Pokeitem/Pokeitem";

function Pokelist(props) {
  const { pokemondata, filterword = "" } = props;

  return (
    <div>
      <ul className="pokelist">
        {pokemondata
          .filter((pokemon) => pokemon.includes(filterword))
          .map((pokdata, index) => (
            <Pokeitem
              className="carddata"
              objectpokemon={pokdata}
              key={index}
              index={index + 1}
            />
          ))}
        )
      </ul>
    </div>
  );
}
export default Pokelist;
