import React, { useEffect, useState } from "react";
import Winwheel from "winwheel";
import axios from "axios";
import ListedRecipe from "../../components/ListedRecipe";

import './DinnerSelector.scss';

function DinnerSelector({ match: { params } }) {

  const [winningRecipe, setWinningRecipe] = useState(null);

  useEffect(() => {
  const fillWheel = (data) => {
    window.winwheel = new Winwheel({
      canvasId: "myCanvas",
      numSegments: 6,
      textLineWidth: 1,
      textFontSize: 14,
      responsive: true,
      segments: [
        {
          id: data[2].id,
          fillStyle: "#FBF46D",
          text: `${data[2].title.substring(0, 28)}${data[2].title.length > 28 ? '...' : ''}`,
        },
        {
          id: data[6].id,
          fillStyle: "#77E4D4",
          text: `${data[6].title.substring(0, 28)}${data[6].title.length > 28 ? '...' : ''}`,
        },
        {
          id: data[11].id,
          fillStyle: "#B4FE98",
          text: `${data[11].title.substring(0, 28)}${data[11].title.length > 28 ? '...' : ''}`,
        },
        {
          id: data[13].id,
          fillStyle: "#FBF46D",
          text: `${data[13].title.substring(0, 28)}${data[13].title.length > 28 ? '...' : ''}`,
        },
        {
          id: data[16].id,
          fillStyle: "#77E4D4",
          text: `${data[16].title.substring(0, 28)}${data[16].title.length > 28 ? '...' : ''}`,
        },
        {
          id: data[19].id,
          fillStyle: "#B4FE98",
          text: `${data[19].title.substring(0, 28)}${data[19].title.length > 28 ? '...' : ''}`,
        },
      ],
      lineWidth: 3,

      animation: {
        type: "spinToStop",
        duration: 5,
        spins: 8,
        callbackFinished: () => {
          handleWinningSegment();
        },
      },
    });
  };

  
    axios
    .get(`/recipes/byIngredients/${params.ingredients}`)
    .then(({ data }) => {
        fillWheel(data);
    })
    .catch((err) => console.error(err))
  }, [params.ingredients]);

  

  function startSpin() {
    window.winwheel.stopAnimation(false);
    window.winwheel.rotationAngle = window.winwheel.rotationAngle % 360;
    window.winwheel.startAnimation();
  }

  function handleWinningSegment() {
    let winningSegment = window.winwheel.getIndicatedSegment();
    axios
      .get(`/recipe/${winningSegment.id}`)
      .then(({ data }) => {
        setWinningRecipe(data)
      })
      .catch((err) => console.error(err))
  }

  return (
    <>
      <h1 className='dinner-wheel__header'>myKitchen Dinner Wheel</h1>
      <div className='dinner-wheel__container'>
      <canvas id="myCanvas" width="880" height="500" onClick={startSpin} className='dinner-wheel__wheel'>
        Canvas not supported, use another browser.
      </canvas>
      {winningRecipe &&
      <div className='dinner-wheel__winning-segment'>
      <p className='dinner-wheel__winning-segment-name'>And the winner is...</p>
      <ListedRecipe key={winningRecipe.id} recipe={winningRecipe} />
      </div>
      }
      </div>
    </>
  );
}

export default DinnerSelector;