import { useState } from "react";

const Garage = ({ size }) => {
  const [color, setColor] = useState("White");

  return (
    <>
        <h1>Who lives in my {size} Garage?</h1>
    </>
  )
}

export default Garage