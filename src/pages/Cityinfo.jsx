import React, { useEffect, useState } from "react";
import ComboBox from "../components/Dropdown";

// import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const cities = ["Paris", "London", "Copenhagen", "Berlin"];

function Cityinfo({ onGetCity, cityInfo }) {
  const [value, setValue] = useState(cities[0]);
  const [inputValue, setInputValue] = React.useState("");

  return (
    <div>
      <h1>Cityinfo for </h1>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          onGetCity(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={cities}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} />}
      />
      <h3> Current weather in {inputValue} </h3>
      <div>
        <img src={cityInfo.iconURL} alt="weathericon" />
        <p></p>
        <p>Temperature: {cityInfo.temp} C</p>
        <p>Wind: {cityInfo.wind} m/s </p>
      </div>
    </div>
  );
}

export default Cityinfo;
