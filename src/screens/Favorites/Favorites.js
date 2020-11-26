import React, { useEffect, useState } from "react";
import Pokelist from "../../components/Pokelist/Pokelist";
import "./Favorites.css";

function Favorites(props) {
  const [localFav, setLocalFav] = useState(null);

  const getLocalFav = () => {
    const pokeData = JSON.parse(localStorage.getItem("favList"));
    setLocalFav(pokeData);
  };

  useEffect(() => {}, [localFav]);

  useEffect(() => {
    getLocalFav();
  }, []);
  return (
    <div className="favorites_holder">
      <h1 className="favorites_header">Favorites</h1>
      {localFav && <Pokelist pokeData={Object.values(localFav)} />}
    </div>
  );
}

export default Favorites;
