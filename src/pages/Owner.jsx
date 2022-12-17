import React, {useState} from "react";

function Owner({owners}){
// const [owners, onSetOwners]=useState([]);


    // useEffect(() => {
    //     const getOwners = async () => {
    //         const tasksFromServer = await fetchOwners();
    //         setOwners(tasksFromServer);
    //     };
    //     getOwners();
    // }, []);



    return(
        <div className="container">
            <h3>Owners </h3>
            {owners.length > 0
                ? owners.map((owner) => (
                    <div className="owner">
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