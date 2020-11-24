import React, { useEffect } from "react";
import Pokeitem from "../Pokeitem/Pokeitem";

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
              // url={pokdata.url.match(/\d+/)[0]}
              key={index}
            />
          ))}
      </ul>
    </div>
  );
}
export default Pokelist;
