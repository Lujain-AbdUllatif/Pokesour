import React, { useEffect, useState } from "react";
import Searchbar from "../../components/Searchbar/Searchbar";
import Pokelist from "../../components/Pokelist/Pokelist";
import Paging from "../../components/Paging/Paging";
import { getPokemonsApi } from "../../api/api";
import "./App.css";

function App(props) {
  const [searchWord, setSearchWord] = useState("");
  const [pokeData, setPokeData] = useState(null);

  const getPokemons = () => {
    getPokemonsApi()
      .then((res) => res.json())
      .then((res) => {
        setPokeData(res);
        console.log(res);
      })
      .catch((e) => console.log(e));
  };

  const setLocalStorage = () => {
    let localFavList = localStorage.getItem("favList");
    if (!localFavList) {
      localStorage.setItem("favList", JSON.stringify([]));
      localFavList = localStorage.getItem("favList");
    }
  };

  useEffect(() => {
    setLocalStorage();
  }, []);

  useEffect(() => {
    getPokemons();
  }, []);
  return (
    <div className="App">
      <Searchbar setSearchWord={setSearchWord} />
      {pokeData && (
        <>
          {/* <Paging getPokemons={getPokemons} /> */}
          <Pokelist pokeData={pokeData} filterword={searchWord} />
          {/* <Paging getPokemons={getPokemons} /> */}
        </>
      )}
    </div>
  );
}

export default App;
