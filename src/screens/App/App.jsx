import "./App.css";
import Navbar from "../../components/Navbar/Navbar";
import React from "react";

import Searchbar from "../../components/Searchbar/Searchbar";

function App() {
  const [searchWord, setSearchWord] = React.useState("");
  const getPokemons = () => {
    getPokemonsApi()
      .then((res) => res.json())
      .then((res) => {
        setPokeData(res);
        console.log(res);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="App">
      <Navbar />
      <Searchbar setSearchWord={setSearchWord}></Searchbar>
    </div>
  );
}

export default App;
