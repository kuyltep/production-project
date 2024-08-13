import { useState } from "react";
import classes from "./Counter.module.scss";
export const Counter = () => {
  const [counter, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>{counter}</h1>
        <button
          className={classes.button}
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
