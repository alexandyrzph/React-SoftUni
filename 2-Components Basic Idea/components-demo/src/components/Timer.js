import React from "react";

export const Timer = (props) => {
  const [time, setTime] = React.useState(0);

  console.log(time);

  setTimeout(() => {
    setTime(time + 1);
  }, 20000000);

  return (
    <div>
      <h1>Timer</h1>
      <h2>{time} sec.</h2>
    </div>
  );
};
