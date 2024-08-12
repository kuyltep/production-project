import { useState } from "react";

export const Counter = () => {
  const [counter, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>{counter}</h1>
        <button
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
        >
          Counter +1
        </button>
      </div>
    </>
  );
};
