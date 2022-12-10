import BASE_URL from "./settings.js";

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}

function apiFacade() {
  /* Insert utility-methods from a later step (d) here (REMEMBER to uncomment in the returned object when you do)*/
  const setToken = (token) => {
    localStorage.setItem("jwtToken", token);
  };
  const getToken = () => {
    return localStorage.getItem("jwtToken");
  };
  const loggedIn = () => {
    return getToken() != null;
  };
  const logout = () => {
    localStorage.removeItem("jwtToken");
    document.querySelector("#welcomeUser").innerHTML = `Welcome`;
  };

  const fetchItem = (String) => {
    const opts = makeOptions("POST", true, { query: String });
    return (
      fetch(BASE_URL + "/info/pokemon", opts)
        .then(handleHttpErrors)
        // .then((data) => console.log(data))
        .catch((err) => {
          if (err.status) {
            err.fullError.then((e) => console.log(e.message));
          } else {
            console.log("Network Error");
          }
        })
    );
  };

  const fetchCityInfo = (String) => {
    const opts = makeOptions("POST", true, { query: String });
    return (
      fetch(BASE_URL + "/info/cityinfo", opts)
        .then(handleHttpErrors)
        // .then((data) => console.log(data))
        .catch((err) => {
          if (err.status) {
            err.fullError.then((e) => console.log(e.message));
          } else {
            console.log("Network Error");
          }
        })
    );
  };

  const fetchList = async (String) => {
    const opts = makeOptions("POST", true, { deckSize: String });
    return (
      fetch(BASE_URL + "/info/pokemondeck", opts)
        .then(handleHttpErrors)
        // .then((res) => res.json())
        // .then((data) => console.log(data))
        // .then((data) => console.log("datatype fra fetchList: " + typeof data))
        .catch((err) => {
          if (err.status) {
            err.fullError.then((e) => console.log(e.message));
          } else {
            console.log("Network Error");
          }
        })
    );
  };

  const login = (user, password) => {
    const opts = makeOptions("POST", true, {
      username: user,
      password: password,
    });
    return fetch(BASE_URL + "/login", opts)
      .then(handleHttpErrors)
      .then((res) => {
        document.querySelector("#welcomeUser").innerHTML = `Welcome, ${user}`;
        setToken(res.token);
      });
  };

  const createUser = (user, password, rPassword) => {
    const opts = makeOptions("POST", false, {
      userName: user,
      userPass: password,
    });
    return fetch(BASE_URL + "/info/signup", opts).then(handleHttpErrors);
  };

  const fetchData = async () => {
    const opts = makeOptions("GET", true);
    return fetch(BASE_URL + "/info/user", opts).then(handleHttpErrors);
  };

  const makeOptions = (method, addToken, body) => {
    const opts = {
      method: method,
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    };
    if (addToken && loggedIn()) {
      opts.headers["x-access-token"] = getToken();
    }
    if (body) {
      opts.body = JSON.stringify(body);
    }
    return opts;
  };
  return {
    makeOptions,
    setToken,
    getToken,
    loggedIn,
    login,
    logout,
    createUser,
    fetchData,
    fetchItem,
    fetchList,
    fetchCityInfo,
  };
}
const facade = apiFacade();
export default facade;
