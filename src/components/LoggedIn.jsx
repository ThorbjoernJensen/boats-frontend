import React, {useEffect, useState} from "react";
import facade from "../apiFacade.js";

export default function LoggedIn({setLoggedIn, setLoginMessage}) {

    const logout = () => {
        facade.logout(setLoggedIn, setLoginMessage)
    }

    return (
        <div className="login-container">
            <button onClick={logout}>Logout</button>
        </div>
    )

}