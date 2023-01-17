import React, {useEffect, useState} from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

function CreateBoat({onCreateBoat, harbours, onGetHarbours}) {
    const init = {name: "", brand: "", model: "", image: "", harbour: {}, owners: []};
    const [newBoat, setNewBoat] = useState(init);


    const onChange = (evt) => {
        setNewBoat({...newBoat, [evt.target.id]: evt.target.value})
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        onCreateBoat(newBoat);

    }

    //Dropdown-data for harbour
    const [harbourID, setHarbourID] = useState("Vælg havn");
    const [inputValue, setInputValue] = React.useState("");
    const [harbour, setHarbour] = useState({})
    const harboursNames = harbours.map((harbour) => harbour.name);

    const [owners, setOwners] = useState([])
    useEffect(() => {
            onGetHarbours();
        },
        []
    );

    //boats sorteres fra så det passer til DTO'en
    const reducedHarbours = harbours.map(({ boats, ...rest }) => rest)

    function assignHarbour(newValue)  {
        //
        const chosenHarbour = reducedHarbours.find((harbour) => harbour.name === newValue);
        setHarbour(chosenHarbour);
        console.log("harbour")
        console.log(harbour)
        console.log("chosenHarbour")
        console.log(chosenHarbour)
        setNewBoat({...newBoat, harbour: chosenHarbour})

        console.log("newBoat");
        console.log(newBoat);



        // setTasks(
        //     tasks.map((task) =>
        //         task.id === id ? { ...task, reminder: data.reminder } : task
        //     )

        //Hvorfor logger den et skridt forsinket?

    }


    return (
        <div className="container">
            <div>
                <h2>Create new Boat </h2>
                <form>
                    <input onChange={onChange} type="text" placeholder="Name" id="name"
                           value={newBoat.name}/>
                    <input onChange={onChange} type="text" placeholder="Brand" id="brand"
                           value={newBoat.brand}/>
                    <input onChange={onChange} type="text" placeholder="Model" id="model"
                           value={newBoat.model}/>
                    <input onChange={onChange} type="text" placeholder="ImageUrl" id="image"
                           value={newBoat.image}/>

                    {/*private String name;*/}
                    {/*private String brand;*/}
                    {/*private String model;*/}
                    {/*private String image;*/}
                    {/*private HarbourDTO harbourDTO;*/}
                    {/*private Set<OwnerDTO> ownerDTOs;*/}

                    <div>
                        <Autocomplete className="drop-down"
                            /*løsning fra stackoverflow der gør at den ikke brokker sig over at initial input ikke giver nogen resultater*/
                                      isOptionEqualToValue={(option, value) => option.value === value.value}
                                      value={harbourID}
                                      onChange={(event, newValue) => {
                                          setHarbourID(newValue);
                                          assignHarbour(newValue);
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
                        {harbour ?
                            (<p>Name: {harbour.name}</p>)
                            : <h3> No boats in this harbour </h3>}
                    </div>
                    <button onClick={onSubmit} type="submit">Create Boat</button>

                </form>
            </div>
        </div>
    );
}

export default CreateBoat;