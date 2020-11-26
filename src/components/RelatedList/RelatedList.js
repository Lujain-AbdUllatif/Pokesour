import React, { useState, useEffect } from "react";
import RelatedItem from "../RelatedItem/RelatedItem";
import "./RelatedList.css";

function RelatedList(props) {
  const { pokeData, relatedName } = props;
  useEffect(() => {}, [pokeData]);

  return (
    <div>
      <ul className="related_list">
        {pokeData
          .filter((pokemon) => pokemon.name.includes(relatedName))
          .map((pokdata, index) => <RelatedItem relatedData={pokdata} />)
          .reverse()
          .slice(0, 4)}
      </ul>
    </div>
  );
}
export default RelatedList;
