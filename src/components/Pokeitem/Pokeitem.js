import React from "react";
import "./Pokeitem.css";
import { Link } from "react-router-dom";
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
      <img src={`${imgUrl}${_url}.png`} />
      <Link to={`/profile/${name}`}>
        <h2>{name}</h2>
      </Link>
    </div>
  );
}
export default Pokeitem;
