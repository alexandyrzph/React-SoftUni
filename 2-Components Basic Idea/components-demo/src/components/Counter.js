import { useState } from "react";

export const Counter = (props) => {
  const [count, setCount] = useState(props.start ?? 0);

  const increaseHandler = () => {
    setCount((oldCount) => oldCount + 1);
  };

  const decreaseHandler = () => {
    setCount((oldCount) => oldCount - 1);
  };

  const clearHandler = () => {
    setCount((oldCount) => (oldCount = 0));
  };

  let title = "Counter";

  if (count < 10) {
    title = "Counter";
  } else if (count < 20) {
    title = "Turbo Counter";
  } else if (count < 30) {
    title = "Mega Counter";
  } else if (count < 40) {
    title = "Giga Counter";
  } else {
    title = "Ultra Counter";
  }

  return (
    <div>
      <h1>{title}</h1>
      <h2>{count}</h2>
      <button onClick={increaseHandler}>+</button>
      <button onClick={clearHandler}>Clear</button>
      <button onClick={decreaseHandler}>-</button>
    </div>
  );
};
