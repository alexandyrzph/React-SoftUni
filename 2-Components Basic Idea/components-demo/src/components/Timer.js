import { useState } from "react";

export const Timer = (props) => {
  let [time, setTime] = useState(Date.now());

  setTimeout(() => {
    setTime(time => time = Date.now());
  }, 1000);

  return (
    <div>
      <h1>Timer</h1>
      <h2>{time} sec.</h2>
    </div>
  );
};
