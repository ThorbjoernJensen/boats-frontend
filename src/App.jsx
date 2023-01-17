import {useRef, useState, useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Search from "./pages/Search.jsx";
import Cityinfo from "./pages/Cityinfo.jsx";
import facade from "./apiFacade";
import Header from "./components/Header.jsx";
import SignUp from "./components/SignUp.jsx";
import Item from "./pages/Item.jsx";
import List from "./pages/List.jsx";
import Owner from "./pages/Owner.jsx"
import Boats from "./pages/Boats.jsx";
import Harbours from "./pages/Harbours.jsx";
import CreateBoat from "./pages/CreateBoat.jsx";

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [loginMessage, setLoginMessage] = useState("Log in to use the API");
    const [errorMessage, setErrorMessage] = useState("No Errors");
    const [owners, setOwners] = useState([]);
    const [harbours, setHarbours] = useState([]);
    const [boats, setBoats] = useState([]);

    // Event når der trykkes på submit id:


    // useEffect(() => {
    //     const getHarbours = async () => {
    //         // const harboursFromAPI = await facade.fetchHarbours();
    //         // console.log(harboursFromAPI)
    //         // setHarbours(harboursFromAPI);
    //     };
    //     getHarbours();
    // }, []);

    const getOwners = async () => {
        await facade.fetchData("/boat/owner", setOwners, "GET", null, setErrorMessage);
        console.log(owners);

    };

    const getHarbours = async () => {
        await facade.fetchData("/boat/harbour", setHarbours, "GET", null, setErrorMessage);
        console.log(harbours);
    }

    // const getBoats = async () => {
    //     await facade.fetchData("boat/owner", setBoats, "GET", null, setErrorMessage);
    //     console.log(boats);
    // }

    const getBoats = async () => {
        await facade.fetchData("/boat/boat", setBoats, "GET", null, setErrorMessage);
        console.log("fra get boats" + harbours);
    }

    const createBoat = async (newBoat) => {

        console.log("create boat")
        console.log(newBoat)
        await facade.fetchData("/boat/boat", ()=>alert("Boat created"), "POST", newBoat, setErrorMessage);
    }


    return (
        <>
            <Header setLoggedIn={setLoggedIn} loggedIn={loggedIn} setErrorMessage={setErrorMessage}
                    setLoginMessage={setLoginMessage} loginMessage={loginMessage}/>
            <Routes>
                <Route path="" element={<Home/>}/>
                <Route path="/search" element={<Search/>}/>
                <Route path="/signup" element={<SignUp setLoggedIn={setLoggedIn}/>}/>
                <Route path="/owner"
                       element={
                           <div>
                               {<h3> Owners </h3>}
                               {facade.hasUserAccess("user", loggedIn) ?
                                   (<Owner owners={owners}
                                           onGetOwners={getOwners}/>) :
                                   ("Login to see owners")}
                           </div>
                       }
                />
                <Route path="/boat"
                       element={
                           <>
                               {<h3> Boats </h3>}
                               {facade.hasUserAccess("admin", loggedIn) ?
                                   <Boats boats={boats}
                                          onGetBoats={getBoats}/> :
                                   ("you must be logged in with admin rights to see boat details")
                               }
                           </>
                       }
                />
                <Route path="/harbour"
                       element={
                           <>
                               {<h3> Boats </h3>}
                               {facade.hasUserAccess("admin", loggedIn) ?
                                   <Harbours harbours={harbours}
                                             onGetHarbours={getHarbours}/> :
                                   ("you must be logged in with admin rights to see boat details")
                               }
                           </>
                       }
                />
                <Route path="*" element={<h1>Page Not Found !!!!</h1>}/>
                <Route path="/createboat" element={
                    <div>
                        {<h3> Create Boat </h3>}
                        {facade.hasUserAccess("admin", loggedIn) ?
                            (<CreateBoat onCreateBoat={createBoat}
                                         harbours={harbours}
                                         onGetHarbours={getHarbours}/>) :
                            ("only admins can create boats")}
                    </div>
                }></Route>
            </Routes>
        </>

    )
}

export default App;

//
// return (
// <div>
// <h2>Login</h2>
// <form onChange={onChange}>
// <input placeholder="User Name" id="username"/>
// <input placeholder="Password" id="password"/>
// <button onClick={performLogin}>Login</button>
// <button onClick=>Sign up</button>
// </form>
// </div>
// )
//

