import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import Login from "./Login.jsx";
import LoggedIn from "./LoggedIn.jsx";
import "../styles/header.css";

function Header({loggedIn, setLoggedIn, setLoginMessage, loginMessage, setErrorMessage}) {
    console.log("loginstatus: " + loggedIn)
    return (
        <nav className="topnav">
            <div className="topnavLeft">
                {/*<p id="welcomeUser">{loggedIn ? ( "Logged in as" ) : "Welcome"}</p>*/}
                <p> {loginMessage} </p>

                {/*{facade.hasUserAccess('user', loggedIn) && (*/}
                {/*    <li>*/}
                {/*        <NavLink activeClassName="active" to="/jokes">*/}
                {/*            Jokes*/}
                {/*        </NavLink>*/}
                {/*    </li>*/}
                {/*)}*/}
            </div>

            <div className="topnavMid">
                <NavLink className="" to="/">
                    <i className="fa fa-fw fa-home"></i> Home
                </NavLink>
                <NavLink to="/owner">
                    <i className="fa fa-fw fa-envelope"></i> Owners
                </NavLink>
                <NavLink to="/boat">
                    <i className="fa fa-fw fa-envelope"></i> Boats
                </NavLink>
                <NavLink to="/harbour">
                    <i className="fa fa-fw fa-envelope"></i> Harbours
                </NavLink>

            </div>

            <div className="topnavRight">
                {!loggedIn ? (
                    <Login setLoggedIn={setLoggedIn} setLoginMessage={setLoginMessage}
                           setErrorMessage={setErrorMessage}/>
                ) : (

                    <LoggedIn setLoggedIn={setLoggedIn} setLoginMessage={setLoginMessage}/>

                )}
                <NavLink to="/signup">
                    <button className="signUp">Sign up</button>
                </NavLink>
            </div>
        </nav>
    );
}

export default Header;
