import { useState, useEffect } from "react";

const Color = () => {
    const [favoriteColor, setfavoriteColor] = useState("red");

  
    useEffect(() =>{
        alert('useEffect reached');
    })

    const changeColor = () => {
        setfavoriteColor((color) => color = "blue");
    }
  
    return (
      <>
        <h1>My Favorite Color is {favoriteColor}</h1>
        <button onClick={changeColor}>Change color</button>
     
      </>
    );
  };
  
  export default Color;
  