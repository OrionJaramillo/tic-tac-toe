import React, { useState } from 'react';
import './App.css';

function App() {
  const [user, setUser] = React.useState("Player 1");
  const [winner, setWinner] = React.useState("");
  const [board, setBoard] = React.useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
  ]);

  const setUserHandler = (e) => {
    //if there is no current item in posiiton and there isnt currently a winner
    //update player and add X or O to the board array
    if (
      user === "Player 1" && 
      board[e.target.value] === "" && 
      winner === "") {
      setUser("Player 2");
      board.splice(parseInt(e.target.value), 1, "O");
    } else if (
      user === "Player 2" &&
      board[e.target.value] === "" &&
      winner === ""
    ) {
      setUser("Player 1");
      board.splice(parseInt(e.target.value), 1, "X");
    }

    //winning combinations
    const upperRow = board.slice(0, 3).join("");
    const midRow = board.slice(3, 6).join("");
    const bottomRow = board.slice(6, 9).join("");
    const leftColumn = board[0] + board[3] + board[6];
    const midColumn = board[1] + board[4] + board[7];
    const rightColumn = board[2] + board[5] + board[8];
    const leftDiagonal = board[0] + board[4] + board[8];
    const rightDiagonal = board[2] + board[4] + board[6];
    
    //determine the winner
    if (
      upperRow === "XXX" ||
      midRow === "XXX" ||
      bottomRow === "XXX" ||
      leftColumn === "XXX" ||
      rightColumn === "XXX" ||
      midColumn === "XXX" ||
      leftDiagonal === "XXX" ||
      rightDiagonal === "XXX"
    ) {
      setWinner("Player 2 Wins!");
    } else if (
      upperRow === "OOO" ||
      midRow === "OOO" ||
      bottomRow === "OOO" ||
      leftColumn === "OOO" ||
      rightColumn === "OOO" ||
      midColumn === "OOO" ||
      leftDiagonal === "OOO" ||
      rightDiagonal === "OOO"
    ) {
      setWinner("Player 1 Wins!");
    } else if (board.join("").length === 9 && winner === "") {
      setWinner("Cats Game");
    }
  };

  //Reset the Game
  const reset = () => {
    setUser("Player 1"); 
    setWinner("");
    setBoard(["", "", "", "", "", "", "", "", ""]);
  };

  return (
    <div className="App">
      <div className="user-interface">
        <div>
          <h1>Tic-Tac-Toe</h1>
        </div>
        <div className="board-wrapper">
          <div className="board-row upper-row">
            <div className="box left-box">
              <button onClick={setUserHandler} value={"0"}>
                {board[0]}
              </button>
            </div>
            <div className="box mid-box">
              <button onClick={setUserHandler} value={"1"}>
                {board[1]}
              </button>
            </div>
            <div className="box right-box">
              <button onClick={setUserHandler} value={"2"}>
                {board[2]}
              </button>
            </div>
          </div>
          <div className="board-row mid-row">
            <div className="box left-box">
              <button onClick={setUserHandler} value={"3"}>
                {board[3]}
              </button>
            </div>
            <div className="box mid-box">
              <button onClick={setUserHandler} value={"4"}>
                {board[4]}
              </button>
            </div>
            <div className="box right-box">
              <button onClick={setUserHandler} value={"5"}>
                {board[5]}
              </button>
            </div>
          </div>
          <div className="board-row center-row">
            <div className="box left-box">
              <button onClick={setUserHandler} value={"6"}>
                {board[6]}
              </button>
            </div>
            <div className="box mid-box">
              <button onClick={setUserHandler} value={"7"}>
                {board[7]}
              </button>
            </div>
            <div className="box right-box">
              <button onClick={setUserHandler} value={"8"}>
                {board[8]}
              </button>
            </div>
          </div>
        </div>
        <div>
          <h2>{winner.length > 1 ? winner : user}</h2>
        </div>
        <div>
          <button onClick={reset}>Start New Game</button>
        </div>
      </div>
    </div>
  );
}

export default App;
