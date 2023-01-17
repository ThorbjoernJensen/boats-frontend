import React, {useEffect, useState} from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

function Harbours({harbours, onGetHarbours}) {
    const [harbourId, setHarbourId] = useState("Vælg havn");
    const [inputValue, setInputValue] = React.useState("");
    const [harbour, setHarbour] = useState({})

    // const [isLoggedIn, setIsLoggedIn] = useState(true);

    const harboursNames = harbours.map((harbour) => harbour.name);

    useEffect(() => {
            onGetHarbours();
        },
        []
    );

    const choseHarbour = (newValue) => {
        const chosenHarbour = harbours.find((harbour) => harbour.name === newValue);
        setHarbour(chosenHarbour);
        console.log(chosenHarbour);

        //Hvorfor logger den et skridt forsinket?
        console.log(harbour);

    }


    return (
        // <div className="container">
        <div>
            {/*<h3>Boats </h3>*/}
            <Autocomplete className="drop-down"
                /*løsning fra stackoverflow der gør at den ikke brokker sig over at initial input ikke giver nogen resultater*/
                          isOptionEqualToValue={(option, value) => option.value === value.value}

                          value={harbourId}
                          onChange={(event, newValue) => {
                              setHarbourId(newValue);
                              choseHarbour(newValue);
                          }}
                          inputValue={inputValue}
                          onInputChange={(event, newInputValue) => {
                              setInputValue(newInputValue);
                          }}
                          id="controllable-states-demo"
                          options={harboursNames}
                // keykey={harbour.id}
                          sx={{width: 300}}
                          renderInput={(params) => <TextField {...params} />}
            />

            {harbour &&

                <div className="owner">
                    <div key={harbour.id}>
                        {/*<img src={item.pokemonImage} alt="" className="src" />*/}
                        <p>Name: {harbour.name}</p>
                        <p>Address: {harbour.address}</p>
                        <p>Capacity: {harbour.capacity}</p>
                        {harbour.boats && harbour.boats.length !== 0 && harbour.boats.constructor !== Object ?
                            <div className="card-list">
                                <h3> Boats currently in {harbour.name}</h3>
                                {harbour.boats.map((boat) => (
                                    <div className="card-container" key={boat.id}>
                                        {/*vi har noget at mappe over*/}
                                        {/*/!*<img src={item.pokemonImage} alt="" className="src" />*!/*/}
                                        <p>Boat name: {boat.name}</p>
                                        <img src={boat.image}/>
                                    </div>
                                ))}
                            </div>
                            : <h3> No boats in this harbour </h3>}
                    </div>
                </div>
            }

        </div>
    )
}

export default Harbours;