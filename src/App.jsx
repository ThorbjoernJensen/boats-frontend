import { useRef, useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Search from "./pages/Search.jsx";
import Cityinfo from "./pages/Cityinfo.jsx";
import facade from "./apiFacade";
import Header from "./components/Header.jsx";
import SignUp from "./components/SignUp.jsx";
import Item from "./pages/Item.jsx";
import List from "./pages/List.jsx";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [item, setItem] = useState({});
  const [list, setList] = useState([]);

  const [cityInfo, setCityInfo] = useState({});

  // Event når der trykkes på submit id:
  const getItem = (input) => {
    facade.fetchItem(input).then((res) => {
      setItem(res);
      console.log("fra getitem typeaf res: " + typeof res);
    });
  };

  const getList = async (input) => {
    const res = await facade.fetchList(input);

    setList(res);
  };

  const getCityInfo = (input) => {
    facade.fetchCityInfo(input).then((res) => {
      console.log(input);
      setCityInfo(res);
    });
  };

  return (
    <>
      <Header setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route
          path="/cityinfo"
          element={<Cityinfo onGetCity={getCityInfo} cityInfo={cityInfo} />}
        />
        <Route path="/signup" element={<SignUp setLoggedIn={setLoggedIn} />} />
        <Route
          path="/item"
          element={<Item onGetItem={getItem} item={item} />}
        />
        <Route
          path="/list"
          element={<List onGetList={getList} list={list} />}
        />
        <Route path="*" element={<h1>Page Not Found !!!!</h1>} />
      </Routes>
    </>
  );
}

export default App;

// function LogIn({ login }) {
//   const init = { username: "", password: "" };
//   const [loginCredentials, setLoginCredentials] = useState(init);
//
//   const performLogin = (evt) => {
//     evt.preventDefault();
//     login(loginCredentials.username, loginCredentials.password);
//   }
//   const onChange = (evt) => {
//     setLoginCredentials({ ...loginCredentials,[evt.target.id]: evt.target.value })
//   }
//
//   return (
//     <div>
//       <h2>Login</h2>
//       <form onChange={onChange} >
//         <input placeholder="User Name" id="username" />
//         <input placeholder="Password" id="password" />
//         <button onClick={performLogin}>Login</button>
//         <button onClick=>Sign up</button>
//       </form>
//     </div>
//   )
//
// }
// function LoggedIn() {
//   const [dataFromServer, setDataFromServer] = useState("Loading...")
//
//   useEffect(() => {
//     facade.fetchData().then(data=> setDataFromServer(data.msg));
//   }, [])
//
//   return (
//     <div>
//       <h2>Data Received from server</h2>
//       <h3>{dataFromServer}</h3>
//     </div>
//   )
//
// }
//
// function App() {
//   const [loggedIn, setLoggedIn] = useState(false)
//
//   const logout = () => {
//     facade.logout()
//     setLoggedIn(false)
//   }
//   const login = (user, pass) => {
//     facade.login(user, pass)
//           .then(res => setLoggedIn(true))
//   }
//
//   return (
//     <div>
//       {!loggedIn ? (<LogIn login={login} />) :
//         (<div>
//           <LoggedIn />
//           <button onClick={logout}>Logout</button>
//         </div>)}
//     </div>
//   )
//
// }
