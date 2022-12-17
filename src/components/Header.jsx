import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Login from "./Login.jsx";
import LoggedIn from "./LoggedIn.jsx";
import "../styles/header.css";

function Header({ setErrorMsg, loggedIn, setLoggedIn }) {
  return (
    <nav className="topnav">
      <div className="topnavLeft">
        <p id="welcomeUser">Welcome</p>
      </div>

      <div className="topnavMid">
        <NavLink className="" to="/">
          <i className="fa fa-fw fa-home"></i> Home
        </NavLink>
        <NavLink to="/search">
          <i className="fa fa-fw fa-search"></i> Search
        </NavLink>
        <NavLink to="/cityinfo">
          <i className="fa fa-fw fa-envelope"></i> Cityinfo
        </NavLink>
        <NavLink to="/item">
          <i className="fa fa-fw fa-envelope"></i> Item{" "}
        </NavLink>
        <NavLink to="/list">
          <i className="fa fa-fw fa-envelope"></i> List{" "}
        </NavLink>
          <NavLink to="/owner">
              <i className="fa fa-fw fa-envelope"></i> Owner
          </NavLink>
          <NavLink to="/harbour">
              <i className="fa fa-fw fa-envelope"></i> Harbour
          </NavLink>
          <NavLink to="/boat">
              <i className="fa fa-fw fa-envelope"></i> Boat
          </NavLink>

      </div>

      <div className="topnavRight">
        {!loggedIn ? (
          <Login setLoggedIn={setLoggedIn} setErrorMsg={setErrorMsg} />
        ) : (
          <div>
            <LoggedIn setLoggedIn={setLoggedIn} />
          </div>
        )}
        <NavLink to="/signup">
          <button className="signUp">Sign up</button>
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
