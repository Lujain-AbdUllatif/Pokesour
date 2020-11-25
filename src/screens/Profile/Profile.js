import React, { useState, useEffect } from "react";
import Pokeprofile from "../../components/Pokeprofile/Pokeprofile";
import "./Profile.css";

function Profile(props) {
  const [pokeData, setPokeData] = useState(null);
  const {
    match: {
      params: { id },
    },
  } = props;

  const getPokemon = async (poki) => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${poki}`);
    const pokemon = await data.json();
    setPokeData(pokemon);
  };

  console.log(pokeData);

  useEffect(() => {
    getPokemon(id);
  }, []);

  return (
    <div className="profile_main_holder">
      {pokeData && <Pokeprofile {...props} pokeData={pokeData} />}
    </div>
  );
}

export default Profile;
