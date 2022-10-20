import React, { useState } from "react";
import "./Tiles.css";

function Tiles() {
  // super busted
  const [gridsize, setGridsize] = useState({ columns: 0, rows: 0, total: 1 });

  // handleStagger goes here

  const getGridSize = () => {
    const columns = Math.floor(document.body.clientWidth / 50);
    const rows = Math.floor(document.body.clientHeight / 50);

    setGridsize({ columns, rows, total: rows * columns });
    console.log(gridsize);
  };
  getGridSize();

  return <div className="Tiles"></div>;
}

export default Tiles;
