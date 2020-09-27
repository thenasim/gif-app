import React from "react";
import useGif from "../hooks/useGif";

const Random = () => {
  const { gif, fetchGif } = useGif();

  const handleClick = () => {
    fetchGif();
  };

  return (
    <div className="container">
      <h1>Random Gif</h1>
      <img width="500" src={gif} alt="Random Gif" />
      <button onClick={handleClick}>Click for NEW</button>
    </div>
  );
};

export default Random;
