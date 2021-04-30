import { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Detail from "./components/Detail/Detail";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
export const UserContext = createContext();

function App() {
  const [recommen, setRecommen] = useState([]);
  const [newDisney, setNewDisney] = useState([]);
  const [trend, setTrend] = useState([]);
  const [origin, setOrigin] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState({});
  const [token, setToken] = useState(null);
  useEffect(() => {
    const store = sessionStorage.getItem("token");
    if (store) {
      setToken(store);
    }
    const USER = JSON.parse(sessionStorage.getItem("user"));
    if (USER) {
      setLoggedInUser(USER);
    }
  }, []);

  let type1 = "recommend";
  useEffect(() => {
    fetch("https://disney-server.herokuapp.com/viewDisney?type=" + type1, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setRecommen(data);
      });
  }, [type1]);

  let type2 = "new";
  useEffect(() => {
    fetch("https://disney-server.herokuapp.com/viewDisney?type=" + type2, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setNewDisney(data);
      });
  }, [type2]);

  let type3 = "trending";
  useEffect(() => {
    fetch("https://disney-server.herokuapp.com/viewDisney?type=" + type3, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setTrend(data);
      });
  }, [type3]);

  let type4 = "original";
  useEffect(() => {
    fetch("https://disney-server.herokuapp.com/viewDisney?type=" + type4, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setOrigin(data);
      });
  }, [type4]);

  return (
    <div className="App">
      <UserContext.Provider
        value={[
          loggedInUser,
          setLoggedInUser,
          setToken,
          token,
          recommen,
          newDisney,
          origin,
          trend,
        ]}
      >
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route path="/detail/:id">
              <Detail />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
