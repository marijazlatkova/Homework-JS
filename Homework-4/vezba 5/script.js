// Chess Board
// Bonus

let chessBoard = "";

for (let row = 0; row <= 8; row++) {
  for (let column = 0; column <= 8; column++) {
    if ((row + column) % 2 == 0) {
      chessBoard += "■ ";
    } else {
      chessBoard += "□ ";
    }
  }
  chessBoard += "\n";
}

console.log(chessBoard);