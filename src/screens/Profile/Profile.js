import React, { useState, useEffect } from "react";
import { getPokemonsApi } from "../../api/api";
import Pokeprofile from "../../components/Pokeprofile/Pokeprofile";
import RelatedList from "../../components/RelatedList/RelatedList";
import "./Profile.css";

function Profile(props) {
  const [pokeData, setPokeData] = useState(null);
  const [pokeBigData, setPokeBigData] = useState(null);
  const {
    match: {
      params: { id },
    },
  } = props;

  console.log("PROFILE RENDERED", id);

  const relatedName = id.slice(2, 5);

  const getPokemon = async (poki) => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${poki}`);
    const pokemon = await data.json();
    setPokeData(pokemon);
  };

  const getPokemons = () => {
    getPokemonsApi()
      .then((res) => res.json())
      .then((res) => {
        setPokeBigData(res.results);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getPokemon(id);
    getPokemons();
  }, []);

  return (
    <div className="profile_main_holder">
      {pokeData && <Pokeprofile {...props} pokeData={pokeData} />}
      {
        // pokeBigData
        // && (
        //   <RelatedList
        //     {...props}
        //     relatedName={relatedName}
        //     pokeData={pokeBigData}
        //   />
        // )
      }
    </div>
  );
}

export default Profile;
