import { useState } from "react";

export const Clicker = () => {
  const [clicks, setClicks] = useState(0);

  const clickHandler = (e) => {
    console.log(e);

    setClicks((clicks) => clicks + 1);
  };

  return (
    <div>
      <h3>{clicks < 10 ? "Normal Clicks" : "Medium Clicks"}</h3>
      <button onClick={clickHandler}>{clicks}</button>
    </div>
  );
};
