import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";

import UserContext from "./context/UserContext";

function App() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");

  const userContextValue = {
    isAuthorized,
    userId,
    userName,
    setUser: (isAuthorized: boolean, userId: string, userName: string) => {
      setIsAuthorized(isAuthorized);
      setUserId(userId);
      setUserName(userName);
    },
  };

  return (
    <div className="container-fluid pe-0 ps-0" style={{maxWidth: "1100px"}}>
      <Router>
        <UserContext.Provider value={userContextValue}>
          <Navbar />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
          </Switch>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
