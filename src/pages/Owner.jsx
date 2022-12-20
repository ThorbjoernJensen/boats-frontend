import React, {useState, useEffect} from "react";

function Owner({owners, onGetOwners}) {
// const [owners, onSetOwners]=useState([]);


    useEffect(() => {
        onGetOwners();
    }, []);


    return (
        <div className="container">
            <h3>Owners </h3>
            {owners.length > 0
                ? owners.map((owner) => (
                    <div className="owner" key={owner.id}>
                        <div className="windowTop">
                            {/*<img src={item.pokemonImage} alt="" className="src" />*/}
                            <p>Name: {owner.name}</p>
                        </div>

                    </div>
                ))
                : "no list to show"}

        </div>

    );
}

export default Owner;