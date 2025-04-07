import { useState } from "react";

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const [isDraw, setIsDraw] = useState(false);

  const calculateWinner = (squares) => {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let line of winningLines) {
      const [a, b, c] = line;
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const checkDraw = (squares) => {
    return (
      squares.every((square) => square !== null) && !calculateWinner(squares)
    );
  };

  const handleSquareClick = (index) => {
    if (winner || isDraw || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const gameWinner = calculateWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
    } else if (checkDraw(newBoard)) {
      setIsDraw(true);
    } else {
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
    setWinner(null);
    setIsDraw(false);
  };

  const renderSquare = (index) => {
    return (
      <button
        className={`w-16 h-16 border-3 border-gray-950 flex items-center justify-center text-3xl font-bold 
                  ${board[index] === "X" ? "text-red-500" : "text-blue-500"}`}
        onClick={() => handleSquareClick(index)}
      >
        {board[index]}
      </button>
    );
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-purple-100">
      <div className="flex flex-col items-center w-96 min-h-[500px] h-auto bg-white border-3 border-gray-950 rounded-lg p-5">
        <h1 className="text-2xl font-bold mb-4">Jogo da velha</h1>

        <div className="mb-4 text-xl">
          {winner ? (
            <p className="text-green-600">O jogador {winner} wins!</p>
          ) : isDraw ? (
            <p className="text-yellow-600">É um empate</p>
          ) : (
            <p>
              Vez do jogador:{" "}
              <span
                className={
                  currentPlayer === "X" ? "text-red-500" : "text-blue-500"
                }
              >
                {currentPlayer}
              </span>
            </p>
          )}
        </div>

        <div className="grid grid-cols-3 gap-1 mb-6">
          {Array(9)
            .fill(null)
            .map((_, index) => (
              <div key={index}>{renderSquare(index)}</div>
            ))}
        </div>

        <button
          onClick={resetGame}
          className="w-32 h-10 border-3 border-gray-950 bg-red-400 hover:bg-red-500 text-white font-bold"
        >
          Reinicia o Jogo
        </button>
      </div>
    </div>
  );
}

export default TicTacToe;
