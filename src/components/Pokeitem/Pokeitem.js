import React from "react";
const imgUrl =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
function Pokeitem(props) {
  const { objectpokemon, index } = props;
  return (
    <div className="Pokeitem">
      <h2>{objectpokemon.name}</h2>
      <img src={`${imgUrl}${index}.png`} />
    </div>
  );
}
export default Pokeitem;
