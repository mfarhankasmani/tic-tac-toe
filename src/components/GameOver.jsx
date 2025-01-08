export default function GameOver({ winner, players, restart }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner === "Draw" && <p>It's a Draw</p>}
      {winner && winner !== "Draw" && <p>{`Winner is ${players[winner]}`}</p>}
      <p>
        <button onClick={restart}>Rematch!</button>
      </p>
    </div>
  );
}
