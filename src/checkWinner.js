export default function checkWinner(board) {
  // Check rows
  for (let row = 0; row < 3; row++) {
    if (
      board[row][0] &&
      board[row][0] === board[row][1] &&
      board[row][0] === board[row][2]
    ) {
      return board[row][0]; // Winner is board[row][0]
    }
  }

  // Check columns
  for (let col = 0; col < 3; col++) {
    if (
      board[0][col] &&
      board[0][col] === board[1][col] &&
      board[0][col] === board[2][col]
    ) {
      return board[0][col]; // Winner is board[0][col]
    }
  }

  // Check diagonals
  if (
    board[0][0] &&
    board[0][0] === board[1][1] &&
    board[0][0] === board[2][2]
  ) {
    return board[0][0]; // Winner is board[0][0]
  }
  if (
    board[0][2] &&
    board[0][2] === board[1][1] &&
    board[0][2] === board[2][0]
  ) {
    return board[0][2]; // Winner is board[0][2]
  }

  // Check for draw (if all cells are filled and no winner)
  const isFull = board.every((row) => row.every((cell) => cell !== null));
  if (isFull) {
    return "Draw";
  }

  // If no winner found, return null (game is still ongoing)
  return null;
}
