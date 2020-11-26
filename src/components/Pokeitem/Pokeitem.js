import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Pokeitem.css";

const imgUrl =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

function Pokeitem(props) {
  const [isFav, setIsFav] = useState(false);

  const {
    objectpokemon: { name, url },
    setIsChanged,
  } = props;

  const indexUrl = url.split("/");

  const pokeId = indexUrl[indexUrl.length - 2];

  // We are creating a function for saving fav items in the local storage

  const favStorage = () => {
    const localFavList = JSON.parse(localStorage.getItem("favList"));
    const addedItem = { name: name, url: url, imgUrl: `${pokeId}.png` };
    localFavList[name] = addedItem;
    if (!isFav) {
      localStorage.setItem("favList", JSON.stringify(localFavList));
    } else if (isFav) {
      delete localFavList[name];
      localStorage.setItem("favList", JSON.stringify(localFavList));
    }
    setIsFav(!isFav);
  };

  // function for fetching the name from the local storage to render the heart
  const isFavLocal = () => {
    const favList = JSON.parse(localStorage.getItem("favList"));
    favList[name] && setIsFav(true);
  };

  useEffect(() => {
    isFavLocal();
  }, []);

  return (
    <div className="Pokeitem">
      <div className="innerItem">
        <Link to={`/profile/${name}`} className="links_poke">
          {!(Number(pokeId) > 900) ? (
            <img src={`${imgUrl}${pokeId}.png`} alt={pokeId} />
          ) : (
            <i class="fas fa-dragon"></i>
          )}
        </Link>
      </div>
      <div className="innerItem">
        <Link to={`/profile/${name}`} className="links_poke">
          {name}
        </Link>
      </div>
      <div className="innerItem">
        <i
          onClick={favStorage}
          className={`${isFav ? "fas" : "far"} fa-heart`}
        ></i>
      </div>
    </div>
  );
}
export default Pokeitem;
