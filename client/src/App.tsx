import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";

function App() {

  return (
    <div className="container-fluid pe-0 ps-0">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
