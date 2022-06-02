import React, { createContext, useState } from "react";
import data from "../data/data";
import DisplayNumber from "./DisplayNumber";

export const DisplayNumberContext = createContext();
let dataLength = data.length;
const Display = () => {
  const [count, setCount] = useState(0);

  const clickHandler = () => {
    if (count === data.length - 1) {
      alert("You can only go backwards from here...");
    } else {
      setCount((prevCount) => prevCount + 1);
    }
    return;
  };

  const clickHandler2 = () => {
    if (count === 0) {
      alert("You can go only go forward from here..");
    } else {
      setCount((prevCount) => prevCount - 1);
    }
    return;
  };

  return (
    <div>
      <DisplayNumberContext.Provider value={{count, dataLength}}>
        <DisplayNumber />
      </DisplayNumberContext.Provider>
      <h1>
        {data[count].name.first} {" " + data[count].name.last}
      </h1>
      <h2>
        From: {data[count].city}, {" " + data[count].country}
      </h2>
      <h2>Job Title: {data[count].title}</h2>
      <h2>Employer: {data[count].employer}</h2>
      <h2>Favorite Movies</h2>
      <ol type="1">
        <li>{data[count].favoriteMovies[0]}</li>
        <li>{data[count].favoriteMovies[1]}</li>
        <li>{data[count].favoriteMovies[2]}</li>
      </ol>
      <button onClick={clickHandler2}>Back</button>
      <button onClick={clickHandler}>Next</button>
    </div>
  );
};

export default Display;
