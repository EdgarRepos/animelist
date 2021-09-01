import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import AllShows from "./pages/AllShows";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TopShows from "./pages/TopShows";
import Watchlist from "./pages/Watchlist";
import Navbar from "./components/Navbar";

import { getMyAccount } from "./modules/API";
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

  useEffect(() => {
    getMyAccount().then(account => {
      if (account && account.userId) {
        userContextValue.setUser(true, account.userId, account.userName);
      } else console.log(account)
    })
  })

  return (
    <div className="container pe-1 ps-1 pb-2 border">
      <Router>
        <UserContext.Provider value={userContextValue}>
          <Navbar />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/allshows" component={AllShows}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/topshows" component={TopShows}/>
            <Route path="/watchlist" component={Watchlist}/>
          </Switch>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
