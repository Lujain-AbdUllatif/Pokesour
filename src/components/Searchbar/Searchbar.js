import React from "react";
import "./Searchbar.css";

function Searchbar(props) {
  const [inputWord, setInputWord] = React.useState("");
  const handleTextChanged = (event) => setInputWord(event.target.value);
  const sendSearch = () => props.setSearchWord(inputWord);

  React.useEffect(() => {
    sendSearch();
  }, [inputWord]);
  return (
    <input
      placeholder="Pokemon Name"
      className="search"
      type="text"
      value={inputWord}
      onChange={handleTextChanged}
    ></input>
  );
}
export default Searchbar;
