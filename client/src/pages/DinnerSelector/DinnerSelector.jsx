import React, { useEffect, useState } from "react";
import Winwheel from "winwheel";
import axios from "axios";

function DinnerSelector({ ingredients, match: { params } }) {
  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    axios
    .get(`/recipes/byIngredients/${params.ingredients}`)
    .then(({ data }) => {
        fillWheel(data);
        setRecipes(data)
    })
    .catch((err) => console.error(err))
  }, [params.recipes]);

  const fillWheel = (data) => {
    console.log(data)
    window.winwheel = new Winwheel({
      canvasId: "myCanvas",
      numSegments: 6,
      textLineWidth: 1,
      textFontSize: 18,
      responsive: true,
      segments: [
        {
          fillStyle: "#FBF46D",
          text: "111111111111111111111111111111".substring(0, 20) + "...",
        },
        {
          fillStyle: "#77E4D4",
          text: "222222222222222222222222222".substring(0, 20) + "...",
        },
        {
          fillStyle: "#B4FE98",
          text: "33333333333333333333333333333".substring(0, 20) + "...",
        },
        {
          fillStyle: "#FBF46D",
          text: "43444444444444444444444444444".substring(0, 20) + "...",
        },
        {
          fillStyle: "#77E4D4",
          text: "555555555555555555555555555".substring(0, 20) + "...",
        },
        {
          fillStyle: "#B4FE98",
          text: "666666666666666666666".substring(0, 20) + "...",
        },
      ],
      lineWidth: 3,

      animation: {
        type: "spinToStop",
        duration: 5,
        spins: 8,
        callbackFinished: () => {
          alertPrize();
        },
      },
    });
  };

  function startSpin() {
    window.winwheel.stopAnimation(false);
    window.winwheel.rotationAngle = window.winwheel.rotationAngle % 360;
    window.winwheel.startAnimation();
  }

  function alertPrize() {
    let winningSegment = window.winwheel.getIndicatedSegment();
    console.log(winningSegment);
  }

  return (
    <>
      <h1>Dinner Selector</h1>
      <canvas id="myCanvas" width="880" height="500" onClick={startSpin}>
        Canvas not supported, use another browser.
      </canvas>
    </>
  );
}

export default DinnerSelector;
