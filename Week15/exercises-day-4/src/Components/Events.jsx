import { useState } from "react";

const Events = () => {
  const [isToggleOn, setIsToggleOn] = useState("true");

  const clickMe = () => alert("I was clicked");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      alert(`The Enter key was pressed, your input is: ${e.target.value}`);
    }
  };

  const handleToggle = () => {
    setIsToggleOn((prevState) => !prevState);
  }

  return (
    <>
      <button onClick={clickMe}></button>
      <input type="text" onKeyDown={handleKeyDown}></input>
      <button onClick={handleToggle}>
        {isToggleOn ? 'ON': 'OFF'}
      </button>
    </>
  );
};

export default Events;
