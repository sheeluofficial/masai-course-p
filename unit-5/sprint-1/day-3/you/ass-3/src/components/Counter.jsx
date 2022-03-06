import { useState } from "react";

export function Counter({value}) {
  const [counter, setCounter] = useState(value);

  const changeCounter = (toChange) => {
    setCounter((pre) => {

        if(toChange==2) {
            return pre*2
        }
        
      if (toChange < 0 && pre === 0) {
        return pre;
      }
      return pre + toChange;
    });
  };

  return (
    <div>
      <h1>Counter: {counter}</h1>

      <button
        onClick={() => {
          changeCounter(1);
        }}
      >
        Add 1
      </button>
      <button
        onClick={() => {
          changeCounter(-1);
        }}
      >
        Sub 1
      </button>
      <button
        onClick={() => {
          changeCounter(2);
        }}
      >
        Double
      </button>
    </div>
  );
}
