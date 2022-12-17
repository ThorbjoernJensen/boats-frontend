import React, {useState} from "react";

function Harbour({harbours}){
    return(
        <div className="container">
            <h3>Harbours </h3>
            {harbours.length > 0
                ? harbours.map((harbour) => (
                    <div className="owner">
                        <div className="windowTop">
                            {/*<img src={item.pokemonImage} alt="" className="src" />*/}
                            <p>Name: {harbour.name}</p>
                            <p>Address: {harbour.address}</p>
                            <p>Capacity: {harbour.capacity}</p>

                        </div>
                    </div>
                ))
                : "no harbours to show"}
        </div>
    );
}
export default Harbour;