import React from "react";
import "./Giflist.css";

const gifs = [
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/1.gif",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/1.gif",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/1.gif",
];

function Giflist(props) {
  return (
    <div className="gif_holder">
      {gifs.map((gif, index) => (
        <img src={gif} alt="gifpic" key={index} className="gif_img" />
      ))}
    </div>
  );
}

export default Giflist;
