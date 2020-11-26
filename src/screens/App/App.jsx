import React, { useEffect, useState } from "react";
import Searchbar from "../../components/Searchbar/Searchbar";
import Pokelist from "../../components/Pokelist/Pokelist";
import { getPokemonsApi } from "../../api/api";
import ScrollToTop from "react-scroll-to-top";

import "./App.css";

function App(props) {
  const [searchWord, setSearchWord] = useState("");
  const [pokeData, setPokeData] = useState(null);
  const [isChanged, setIsChanged] = useState(false);

  const getPokemons = () => {
    getPokemonsApi()
      .then((res) => res.json())
      .then((res) => {
        setPokeData(res.results);
      })
      .catch((e) => console.log(e));
  };

  const setLocalStorage = () => {
    let localFavList = localStorage.getItem("favList");
    if (!localFavList) {
      localStorage.setItem("favList", JSON.stringify({}));
      localFavList = localStorage.getItem("favList");
    }
  };

  useEffect(() => {
    // window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    console.log("TEST");
  }, []);

  useEffect(() => {
    setLocalStorage();
    getPokemons();
  }, [isChanged]);

  return (
    <>
      <ScrollToTop smooth />
      <div className="App">
        <Searchbar setSearchWord={setSearchWord} />
        {pokeData && (
          <>
            {/* <Paging getPokemons={getPokemons} /> */}
            <Pokelist
              setIsChanged={setIsChanged}
              isChanged={isChanged}
              pokeData={pokeData}
              filterword={searchWord}
            />
            {/* <Paging getPokemons={getPokemons} /> */}
          </>
        )}
      </div>
    </>
  );
}

export default App;
