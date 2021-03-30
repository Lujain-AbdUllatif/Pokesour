import React, { useState, useEffect, useRef } from "react";
import Pokeitem from "../Pokeitem/Pokeitem";
import "./Pokelist.css";

const body = document.body,
  html = document.documentElement;

const height = Math.max(
  body.scrollHeight,
  body.offsetHeight,
  html.clientHeight,
  html.scrollHeight,
  html.offsetHeight
);

function Pokelist(props) {
  const { pokeData, filterword = "", setIsChanged, isChanged } = props;

  const itemsList = useRef();
  const prevScrollY = useRef(0);
  const [goingUp, setGoingUp] = useState(false);
  const [scrolled, setScrolled] = useState(0);
  const [items, setItems] = useState(20);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (prevScrollY.current < currentScrollY && goingUp) {
        setGoingUp(false);
      }
      if (prevScrollY.current > currentScrollY && !goingUp) {
        setGoingUp(true);
      }

      prevScrollY.current = currentScrollY;
      setScrolled(~~currentScrollY);

      const itemHeight = 100 | (itemsList.current.clientHeight * (3 / 4));

      if (
        ~~currentScrollY >= ~~itemHeight &&
        ~~currentScrollY <= ~~itemHeight + 100
      ) {
        setIsChanged(true);
        getMoreItems();
        console.log("CALLED");
      }

      console.log(items);
      // console.log(itemHeight * (3 / 4));
      // console.log(~~currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [filterword, pokeData, items]);

  const getMoreItems = () => {
    console.log("MORE ITEMS");
    if (isChanged) {
      setItems(items + 20);
      setIsChanged(false);
    }
  };

  return (
    <div>
      <ul className="pokelist" ref={itemsList}>
        {pokeData
          .filter((pokemon) => pokemon.name.includes(filterword))
          .map((pokdata, index) => (
            <Pokeitem
              className="carddata"
              objectpokemon={pokdata}
              key={index}
              setIsChanged={setIsChanged}
            />
          ))
          .slice(0, items)}
      </ul>
    </div>
  );
}
export default Pokelist;
