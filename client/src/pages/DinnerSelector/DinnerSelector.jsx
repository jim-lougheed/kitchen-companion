import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Winwheel from "winwheel";
import axios from "axios";

function DinnerSelector({ ingredients, match: { params } }) {
  const [recipes, setRecipes] = useState(null);

  const history = useHistory();

  useEffect(() => {
    axios
    .get(`/recipes/byIngredients/${params.ingredients}`)
    .then(({ data }) => {
      console.log(data)
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
          id: data[2].id,
          fillStyle: "#FBF46D",
          text: data[2].title.substring(0, 20) + "...",
        },
        {
          id: data[6].id,
          fillStyle: "#77E4D4",
          text: data[6].title.substring(0, 20) + "...",
        },
        {
          id: data[11].id,
          fillStyle: "#B4FE98",
          text: data[11].title.substring(0, 20) + "...",
        },
        {
          id: data[13].id,
          fillStyle: "#FBF46D",
          text: data[13].title.substring(0, 20) + "...",
        },
        {
          id: data[16].id,
          fillStyle: "#77E4D4",
          text: data[16].title.substring(0, 20) + "...",
        },
        {
          id: data[19].id,
          fillStyle: "#B4FE98",
          text: data[19].title.substring(0, 20) + "...",
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
    setTimeout(history.push(`/recipe/${winningSegment.id}`), 1000)
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
