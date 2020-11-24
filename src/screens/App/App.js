import "./App.css";
import Pokeprofile from "../../components/Pokeprofile/Pokeprofile";
import { getPokemonsApi } from "../../api/api";
import { useEffect, useState } from "react";

function App() {
  const [pokeData, setPokeData] = useState(null);

  const getPokemons = () => {
    getPokemonsApi()
      .then((res) => res.json())
      .then((res) => {
        setPokeData(res);
        console.log(pokeData);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getPokemons();
  }, []);
  return (
    <div className="App">
      <span>HELLLO</span>
      <Pokeprofile />
    </div>
  );
}

export default App;
