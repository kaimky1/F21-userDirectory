import React, { createContext, useState } from "react";
import data from "../data/data";
import DisplayNumber from "./DisplayNumber";
import NewEmployee from "./NewEmployee";

export const DisplayNumberContext = createContext();


const Display = () => {
  let dataLength = data.length;
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(true)

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

  const deleteHandler = () => {
    data.splice(count, 1)
    console.log("After splice", data)
    console.log("count",count, "datalength", data.length)
    setToggle(!toggle)
    // count <= (data.length - 1) ? setCount(count - 1) : setCount(count + 1)
  }

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
      <button onClick={deleteHandler}>Delete</button>
      <NewEmployee data={data}/>
    </div>
  );
};

export default Display;
