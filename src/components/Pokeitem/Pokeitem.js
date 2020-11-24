import React from "react";
const imgUrl =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
function Pokeitem(props) {
  const {
    objectpokemon: { name, url },
  } = props;

  const indexUrl = url.split("/");
  const _url = indexUrl[indexUrl.length - 2];

  return (
    <div className="Pokeitem">
      <h2>{name}</h2>
      <img src={`${imgUrl}${_url}.png`} alt={_url} />
    </div>
  );
}
export default Pokeitem;
