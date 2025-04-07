import { useState } from "react";

function Calculator() {
  const [display, setDisplay] = useState("0");
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

  const inputDigit = (digit) => {
    if (waitingForSecondOperand) {
      setDisplay(String(digit));
      setWaitingForSecondOperand(false);
    } else {
      setDisplay(display === "0" ? String(digit) : display + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForSecondOperand) {
      setDisplay("0.");
      setWaitingForSecondOperand(false);
      return;
    }

    if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  };

  const clearDisplay = () => {
    setDisplay("0");
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  const handleOperator = (nextOperator) => {
    const inputValue = parseFloat(display);

    if (firstOperand === null) {
      setFirstOperand(inputValue);
    } else if (operator) {
      const result = performCalculation();
      setDisplay(String(result));
      setFirstOperand(result);
    }

    setWaitingForSecondOperand(true);
    setOperator(nextOperator);
  };

  const performCalculation = () => {
    if (firstOperand === null || operator === null) return parseFloat(display);

    const inputValue = parseFloat(display);

    switch (operator) {
      case "+":
        return firstOperand + inputValue;
      case "-":
        return firstOperand - inputValue;
      case "×":
        return firstOperand * inputValue;
      case "÷":
        return firstOperand / inputValue;
      default:
        return inputValue;
    }
  };

  const handleEquals = () => {
    if (operator === null || waitingForSecondOperand) return;

    const result = performCalculation();
    setDisplay(String(result));
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(true);
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-purple-100">
      <div className="flex flex-col items-center w-80 bg-white border-3 border-gray-950 rounded-lg p-4">
        <h1 className="text-2xl font-bold mb-4">Calculator</h1>

        <div className="w-full mb-4">
          <div className="w-full h-16 border-3 border-gray-950 flex items-center justify-end px-2 text-3xl font-mono overflow-hidden">
            {display}
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2 w-full">
          <button
            onClick={clearDisplay}
            className="h-12 border-3 border-gray-950 bg-red-400 hover:bg-red-500"
          >
            AC
          </button>

          {["7", "8", "9", "÷"].map((btn) => (
            <button
              key={btn}
              onClick={() =>
                btn === "÷" ? handleOperator(btn) : inputDigit(btn)
              }
              className={`h-12 border-3 border-gray-950 ${
                btn === "÷"
                  ? "bg-gray-300 hover:bg-gray-400"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              {btn}
            </button>
          ))}

          {["4", "5", "6", "×"].map((btn) => (
            <button
              key={btn}
              onClick={() =>
                btn === "×" ? handleOperator(btn) : inputDigit(btn)
              }
              className={`h-12 border-3 border-gray-950 ${
                btn === "×"
                  ? "bg-gray-300 hover:bg-gray-400"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              {btn}
            </button>
          ))}

          {["1", "2", "3", "-"].map((btn) => (
            <button
              key={btn}
              onClick={() =>
                btn === "-" ? handleOperator(btn) : inputDigit(btn)
              }
              className={`h-12 border-3 border-gray-950 ${
                btn === "-"
                  ? "bg-gray-300 hover:bg-gray-400"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              {btn}
            </button>
          ))}

          {["0", ".", "=", "+"].map((btn) => (
            <button
              key={btn}
              onClick={() =>
                btn === "0"
                  ? inputDigit(btn)
                  : btn === "."
                  ? inputDecimal()
                  : btn === "="
                  ? handleEquals()
                  : handleOperator(btn)
              }
              className={`h-12 border-3 border-gray-950 ${
                btn === "+"
                  ? "bg-gray-300 hover:bg-gray-400"
                  : btn === "="
                  ? "bg-blue-400 hover:bg-blue-500 text-white"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calculator;
