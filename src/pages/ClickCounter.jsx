import { useState } from "react";

function ClickCounter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <>
      <div className="flex justify-center items-center w-screen h-screen bg-purple-100">
        <div className="flex justify-center items-center w-100 h-100 bg-white border-3 border-gray-950 rounded-lg">
          <div className="flex items-center justify-center w-20 h-20">
            <p className="text-4xl font-bold">{count}</p>
          </div>

          <button
            onClick={() => increment()}
            className="text-4xl font-bold w-20 h-20 bg-gray ml-20 border-3 border-gray-950 rounded-lg"
          >
            +
          </button>
        </div>
      </div>
    </>
  );
}

export default ClickCounter;
