import React, { useEffect, useState } from "react";
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

  // We are creating a function for saving fav items in the local storage
  const favStorage = () => {
    const localFavList = JSON.parse(localStorage.getItem("favList"));
    // const localFavList2 = JSON.parse(localStorage.getItem("favList"));

    if (localFavList.length === 0) {
      localFavList.push({
        name: name,
        url: url,
        imgUrl: `${imgUrl}${_url}.png`,
      });
    }

    localFavList.forEach((fav) => {
      if (fav?.name !== name) {
        localFavList.push({
          name: name,
          url: url,
          imgUrl: `${imgUrl}${_url}.png`,
        });
      } else {
        localFavList.splice(localFavList.indexOf(fav), 1);
      }
      console.log(localFavList);
    });

    localStorage.setItem("favList", JSON.stringify(localFavList));

    setIsFav(!isFav);
  };

  // function for fetching the name from the local storage to render the heart
  const isFavLocal = () => {
    const favList = JSON.parse(localStorage.getItem("favList"));
    favList.forEach((fav) => {
      fav.name === name && setIsFav(true);
    });
  };

  useEffect(() => {
    isFavLocal();
  }, []);

  return (
    <div className="Pokeitem">
      <img src={`${imgUrl}${_url}.png`} />
      <Link to={`/profile/${name}`} className="links_poke">
        <h2>{name}</h2>
      </Link>
      <i
        onClick={favStorage}
        className={`${isFav ? "fas" : "far"} fa-heart`}
      ></i>
    </div>
  );
}
export default Pokeitem;
