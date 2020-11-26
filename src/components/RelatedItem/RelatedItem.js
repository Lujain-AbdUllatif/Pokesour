import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./RelatedItem.css";

const imgUrl =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

function RelatedItem(props) {
  const {
    relatedData: { name, url },
  } = props;

  const indexUrl = url.split("/");

  const pokeId = indexUrl[indexUrl.length - 2];
  useEffect(() => {}, []);

  return (
    <div className="related_item">
      <div className="related_innerItem">
        <Link to={`/relatedprofile/${name}`} className="links_poke">
          {!(Number(pokeId) > 900) ? (
            <img src={`${imgUrl}${pokeId}.png`} alt={pokeId} />
          ) : (
            <i class="fas fa-dragon"></i>
          )}
        </Link>
      </div>
      <div className="related_innerItem">
        <Link to={`/profile/${name}`} className="links_poke">
          {name}
        </Link>
      </div>
    </div>
  );
}
export default RelatedItem;
