import { useState } from "react";
import Garage from "./Garage";

const Car = ({model}) => {
  const [color, setColor] = useState("White");

  return (
    <>
       <h1>This car is {model}</h1>
       <h2>This is {model} {color}</h2>
       <Garage size="small" />
    </>
  )
}

export default Car