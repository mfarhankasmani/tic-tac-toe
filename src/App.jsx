import { useState } from "react";
import logo from "../public/game-logo.png";
import GameBoard from "./components/GameBoard";
import Players from "./components/Players";
import Log from "./components/Log";
import checkWinner from "./checkWinner";
import GameOver from "./components/GameOver";

const derivedActivePlayer = (turns) => {
  let activePlayer = "X";
  if (turns.length > 0 && turns[0].player === "X") {
    activePlayer = "O";
  }

  return activePlayer;
};

const derivedWinner = (turns) => {
  return turns[0]?.winner || null;
};

const initialGameBoard = () =>
  new Array(3).fill(null).map(() => new Array(3).fill(null));

let gameBoard = initialGameBoard();

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState({
    X: "Player 1",
    O: "Player 2",
  });

  const activePlayer = derivedActivePlayer(gameTurns);
  const winner = derivedWinner(gameTurns);

  const setPlayerName = (name, symbol) => {
    setPlayers((preVal) => ({ ...preVal, [symbol]: name }));
  };

  const handleSelectionSquare = (rowIndex, colIndex) => {
    setGameTurns((prevTurn) => {
      const player = derivedActivePlayer(prevTurn);
      gameBoard[rowIndex][colIndex] = player;

      return [
        {
          square: { row: rowIndex, col: colIndex },
          player,
          winner: checkWinner(gameBoard),
        },
        ...prevTurn,
      ];
    });
  };

  const handleRestart = () => {
    gameBoard = initialGameBoard();
    setGameTurns([]);
  };

  return (
    <>
      <header>
        <img src={logo} />
        <h1>Tic-Tac-Toe</h1>
      </header>
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            {Object.keys(players).map((key) => (
              <Players
                name={players[key]}
                symbol={key}
                isActive={activePlayer === key}
                setPlayerName={setPlayerName}
                key={key}
              />
            ))}
          </ol>
          <GameBoard
            onSelectSquare={handleSelectionSquare}
            board={gameBoard}
            winner={winner}
          />
          {winner && (
            <GameOver
              winner={winner}
              players={players}
              restart={handleRestart}
            />
          )}
        </div>
        <Log turns={gameTurns} />
      </main>
    </>
  );
}

export default App;
