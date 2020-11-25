import React, { useState, useEffect } from "react";
import Pokeitem from "../Pokeitem/Pokeitem";
import "./Pokelist.css";

function Pokelist(props) {
  const { pokeData, filterword = "" } = props;
  const [isChanged, setIsChanged] = useState(null);
  useEffect(() => {}, [filterword, pokeData]);

  return (
    <div>
      <ul className="pokelist">
        {pokeData
          .filter((pokemon) => pokemon.name.includes(filterword))
          .map((pokdata, index) => (
            <Pokeitem
              className="carddata"
              objectpokemon={pokdata}
              key={index}
              setIsChanged={setIsChanged}
            />
          ))
          .slice(0, 20)}
      </ul>
    </div>
  );
}
export default Pokelist;
