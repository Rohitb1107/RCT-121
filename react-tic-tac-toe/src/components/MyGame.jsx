import "../App.css";
import React, { useState } from "react";
import Game from "./Game";

const MyGame = () => {
  const initialData = ["", "", "", "", "", "", "", "", ""];
  const [gameState, setGameState] = useState(initialData);
  const [isXChance, setIsXChance] = useState(false);

  function onBoxClick(index){
   let strings = Array.from(gameState);
   strings[index] = isXChance ? "X" : "O";
   setGameState(strings);
   setIsXChance(isXChance);
  }

  return (
    <>
      <div className="main-div">
        <div>React Tic Tac Toe</div>
        <div className="game-part">
          <div className="row-1">
            <div className="col" state={gameState[0]} onClick={() => onBoxClick(0)}></div>
            <div className="col" state={gameState[1]} onClick={() => onBoxClick(1)}></div>
            <div className="col" state={gameState[2]} onClick={() => onBoxClick(2)}></div>
          </div>
          <div className="row-1">
            <div className="col" state={gameState[3]} onClick={() => onBoxClick(3)}></div>
            <div className="col" state={gameState[4]} onClick={() => onBoxClick(4)}></div>
            <div className="col" state={gameState[5]} onClick={() => onBoxClick(5)}></div>
          </div>
          <div className="row-1">
            <div className="col" state={gameState[6]} onClick={() => onBoxClick(6)}></div>
            <div className="col" state={gameState[7]} onClick={() => onBoxClick(7)}></div>
            <div className="col" state={gameState[8]} onClick={() => onBoxClick(8)}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyGame;
