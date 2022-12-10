import React, { useEffect, useState } from "react";
import "../styles/pokesite.css";
import facade from "../apiFacade.js";

const Item = ({ onGetItem, item }) => {
  const [id, setId] = useState("");
  // const [data, setData] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    onGetItem(id);
    console.log(id);
  };

  return (
    <div>
      <p> single items goes here </p>
      <div>
        <form onSubmit={onSubmit}>
          <div>
            <label> input searchterm </label>
            <input
              type="text"
              placeholder="input searchterm"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <input type="submit" value="find Item" />
          </div>
        </form>
      </div>

      <div className="pokemonWindow">
        <div className="windowTop" id="pokemonWindow">
          <img src={item.pokemonImage} alt="" className="src" />
          <p>Id#{item.pokemonId}</p>
        </div>
        <p>{item.pokemonName}</p>
        <p className="random">{item.randomFact}</p>
      </div>
    </div>
  );
};
export default Item;
