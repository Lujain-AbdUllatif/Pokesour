import React from "react";
import "./App.css";
import Pokelist from "../../components/Pokelist/Pokelist";

function App() {
  const [searchWord, setSearchWord] = React.useState("");

  return (
    <div className="App">
      <span>HELLLO</span>
      <Pokelist pokemondata={pokemondata} filterword={searchWord} />
    </div>
  );
}

export default App;
