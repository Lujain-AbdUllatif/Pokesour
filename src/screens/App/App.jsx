import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Searchbar from "../../components/Searchbar/Searchbar";
import Pokeprofile from "../../components/Pokeprofile/Pokeprofile";
import Pokelist from "../../components/Pokelist/Pokelist";

import { getPokemonsApi } from "../../api/api";
import "./App.css";


function App() {
  const [searchWord, setSearchWord] = useState("");
  const [pokeData, setPokeData] = useState(null);

  const getPokemons = () => {
    getPokemonsApi()
      .then((res) => res.json())
      .then((res) => {
        setPokeData(res);
        
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getPokemons();
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Searchbar setSearchWord={setSearchWord}/>
      {pokeData && <Pokelist  pokeData={pokeData} filterword={searchWord}/>}
    </div>
  );
}

export default App;
