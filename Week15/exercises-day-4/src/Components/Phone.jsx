import { useState} from "react";

const Phone = () => {
  const [brand, setBrand] = useState("Samsung");
  const [model, setModel] = useState("Galaxy S20");
  const [color, setColor] = useState("black");
  const [year, setYear] = useState(2020);

  const changeColor = () => {
    setColor((color) => color = 'blue');
  }

  return (
    <>
      <h1>My phone is a {brand}</h1>
      <h2>
        It is a {color} {model} from {year}
      </h2>
      <button onClick={changeColor}>Change color</button>
    </>
  );
};

export default Phone;
