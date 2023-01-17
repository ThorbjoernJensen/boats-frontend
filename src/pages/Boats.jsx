import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";

function Boats({boats, onGetBoats}) {

    useEffect(() => {
        onGetBoats();

    }, []);
    console.log(boats);

    return (
        <div className="container">
            <h3>Boats </h3>
            <NavLink to="/createboat">
                <i className="fa fa-fw fa-envelope"></i> opret båd
            </NavLink>
            {boats.length > 0
                ? (

                    boats.map((boat) => (
                            <div key={boat.id} className="owner">
                                <div className="windowTop">

                                    <p>Name: {boat.name}</p>
                                    {boat.owners.length > 0
                                        ?
                                        boat.owners.map((owner) =>
                                            <div key={owner.id} className="owner">

                                                <div className="windowTop">
                                                    <p>{owner.name}</p>
                                                </div>
                                            </div>)
                                        : <p> "no owners registered" </p>}

                                    {boat.harbour ?
                                        <p> {boat.harbour.name} </p>

                                        : <p> "no harbour registered" </p>}
                                    {/*<p>Address: {harbour.address}</p>*/}
                                    {/*<p>Capacity: {harbour.capacity}</p>*/}
                                </div>
                            </div>
                        )
                    ))
                : "no boats to show"}
        </div>
    );
}

export default Boats;