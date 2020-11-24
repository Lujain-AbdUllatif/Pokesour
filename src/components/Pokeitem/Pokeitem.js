import React from "react";
import "./Pokeitem.css";
const imgUrl =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
function Pokeitem(props) {
  const { objectpokemon, index } = props;
  return (
    <div className="Pokeitem">
      <img src={`${imgUrl}${index}.png`} />
      <h2>{objectpokemon.name}</h2>
    </div>
  );
}
export default Pokeitem;
