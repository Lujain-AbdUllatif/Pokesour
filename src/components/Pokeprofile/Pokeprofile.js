import React, { useEffect, useState } from "react";
import "./Pokeprofile.css";
import Giflist from "../Giflist/Giflist";

function Pokeprofile(props) {
  const {
    pokeData: {
      name,
      sprites: { other, versions },
      moves,
      abilities,
    },
  } = props;

  const links = versions["generation-v"]["black-white"].animated;

  const imgUrl = other["official-artwork"].front_default;

  return (
    <div className="profile_holder">
      <h1>{name}</h1>
      <div className="profile_img_section">
        <img src={imgUrl} alt="poke" />
        {/* <button>Toggle</button> */}
      </div>
      <div className="profile_desc">
        <div>
          <h3>Moves :</h3>
          <ul>
            {moves.map((move) => (
              <li>{move.move.name}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Abilities :</h3>
          <ul>
            {abilities.map((abl) => (
              <li>{abl.ability.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="animated_profile">
        {links && <Giflist gifLinks={links} />}
      </div>
    </div>
  );
}

export default Pokeprofile;
