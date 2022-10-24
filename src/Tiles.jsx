import React, { useEffect, useState } from "react";
import anime from "animejs";
import randomColor from "randomcolor";
import "./Tiles.scss";

function Tiles() {
  const [gridsize, setGridsize] = useState({ columns: 0, rows: 0, total: 1 });

  useEffect(() => {
    getGridSize();
    window.addEventListener("resize", getGridSize);
  }, []);

  const handleStagger = (i) => {
    console.log('handleStagger called')
    const { columns, rows } = gridsize;
    const el = i.target.id;

    anime({
      targets: ".grid-item",
      backgroundColor: randomColor(),
      scale: [
        { value: 0.5, easing: "easeOutSine", duration: 150 },
        { value: 1, easing: "easeInOutQuad", duration: 300 },
      ],
      // delay: anime.stagger(100, { grid: [columns, rows], from: el }),
    });
  };

  const getGridSize = () => {
    const columns = Math.floor(document.body.clientWidth / 50);
    const rows = Math.floor(document.body.clientHeight / 50);
    setGridsize({ columns, rows, total: rows * columns });

    anime({
      targets: ".grid-item",
      backgroundColor: "#fff",
      duration: 500,
      easing: "linear",
    });
  };

  const { total, columns, rows } = gridsize;

  return (
    <div id="grid">
      {[...Array(total)].map((x, i) => (
        <div className="grid-item" id={i} onClick={(i) => handleStagger(i)} />
      ))}
    </div>
  );
}

export default Tiles;
