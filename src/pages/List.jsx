import React, { useEffect, useState } from "react";
import "../styles/pokesite.css";
import facade from "../apiFacade.js";

const List = ({ onGetList, list }) => {
  const [size, setSize] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    onGetList(size);
    console.log(size);
  };
  console.log("hej");
  console.log(list);

  return (
    <div>
      <p> List of items goes here </p>
      <div>
        <form onSubmit={onSubmit}>
          <div>
            <label> input searchterm </label>
            <input
              type="text"
              placeholder="input deck size"
              value={size}
              onChange={(e) => setSize(e.target.value)}
              min="1"
              max="5"
            />
            <input type="submit" value="fetch deck" />
          </div>
        </form>
      </div>

      {list.length > 0
        ? list.map((item) => (
            <div className="pokemonWindow">
              <div className="windowTop" id="pokemonWindow">
                <img src={item.pokemonImage} alt="" className="src" />
                <p>Id#{item.pokemonId}</p>
              </div>
              <p>{item.pokemonName}</p>
              <p className="random">{item.randomFact}</p>
            </div>
          ))
        : "no list to show"}
    </div>
  );
};

export default List;
