import "./App.css";
import Navbar from "../../components/Navbar/Navbar";
import React from "react";

import Searchbar from "../../components/Searchbar/Searchbar";

function App() {
  const [searchWord, setSearchWord] = React.useState("");

  return (
    <div className="App">
      <Navbar />
      <Searchbar setSearchWord={setSearchWord}></Searchbar>
    </div>
  );
}

export default App;
