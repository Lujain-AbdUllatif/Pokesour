import "./App.css";
import React from "react";

import Searchbar from "../../components/Searchbar/Searchbar";

function App() {
  const [searchWord, setSearchWord] = React.useState("");

  return (
    <div className="App">
      <Searchbar setSearchWord={setSearchWord}></Searchbar>
    </div>
  );
}

export default App;
