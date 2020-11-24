import React from "react";
import "./Pokeprofile.css";
import Giflist from "../Giflist/Giflist";

function Pokeprofile(props) {
  return (
    <div className="profile_holder">
      <h1>Name</h1>
      <div className="profile_img_section">
        <img
          src={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
          }
          alt="poke"
        />
        <button>Toggle</button>
      </div>
      <div className="profile_desc">
        <h3>Description :</h3>
        <p>
          lorem loremlorem loremlorem loremlorem loremlorem loremlorem
          loremlorem loremlorem loremlorem loremlorem lorem
        </p>
      </div>
      <div className="animated_profile">
        <Giflist />
      </div>
    </div>
  );
}

export default Pokeprofile;
