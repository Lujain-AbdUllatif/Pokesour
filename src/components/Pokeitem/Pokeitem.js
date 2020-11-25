import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Pokeitem.css";

const imgUrl =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

function Pokeitem(props) {
  const [isFav, setIsFav] = useState(false);

  const {
    objectpokemon: { name, url },
  } = props;

  const indexUrl = url.split("/");

  const _url = indexUrl[indexUrl.length - 2];

  const addFav = () => {
    setIsFav(!isFav);
  };

  return (
    <div className="Pokeitem">
      <img src={`${imgUrl}${_url}.png`} />
      <Link to={`/profile/${name}`} className="links_poke">
        <h2>{name}</h2>
      </Link>
      <i onClick={addFav} className={`${isFav ? "fas" : "far"} fa-heart`}></i>
    </div>
  );
}
export default Pokeitem;
