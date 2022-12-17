import React, {useState} from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

function Boat({harbours}) {
    const [value, setValue] = useState("Vælg havn");
    const [inputValue, setInputValue] = React.useState("");
    const [harbour, setHarbour] = useState({})

    const harboursNames = harbours.map((harbour) => harbour.name);

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
            <h3>Boats </h3>
            <Autocomplete
                /*løsning fra stackoverflow der gør at den ikke brokker sig over at initial input ikke giver nogen resultater*/
                isOptionEqualToValue={(option, value) => option.value === value.value}

                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                    choseHarbour(newValue);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                }}
                id="controllable-states-demo"
                options={harboursNames}
                sx={{width: 300}}
                renderInput={(params) => <TextField {...params} />}
            />

            {/*check for tomt objekt*/}

            <div className="owner">
                <div>
                    {/*<img src={item.pokemonImage} alt="" className="src" />*/}
                    <p>Name: {harbour.name}</p>
                    <p>Address: {harbour.address}</p>
                    <p>Capacity: {harbour.capacity}</p>

                    {harbour.boats && harbour.boats.length !== 0 && harbour.boats.constructor !== Object ?
                        // console.log(harbour.boats) : "no boats here"}


                        // <p> boats in this harbour </p>
                        <div>
                            {harbour.boats.map((boat) => (
                            <div>
                                <div key={boat.id}>
                                    {/*vi har noget at mappe over*/}
                                    {/*/!*<img src={item.pokemonImage} alt="" className="src" />*!/*/}
                                    <p>Boatname: {boat.name}</p>
                                    <img src={boat.image}/>
                                </div>
                            </div>
                            ))}
                        </div>
                        : <p> No boats in this harbour </p>}
                </div>
            </div>
        </div>
    )
}

export default Boat;