import React from "react";
import "./Giflist.css";

function Giflist(props) {
  const { gifLinks } = props;

  return (
    <div className="gif_holder">
      {Object.values(gifLinks).map(
        (gif, index) =>
          gif !== null && (
            <img src={gif} alt="gifpic" key={index} className="gif_img" />
          )
      )}
    </div>
  );
}

export default Giflist;
