import React, {useContext} from "react";
import { Link } from "react-router-dom";

import { logOut } from "../modules/API";
import UserContext from "../context/UserContext";

function Navbar() {
  const userContext = useContext(UserContext);

  function handleLogOut() {
    logOut();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top mx-auto border" style={{maxWidth: "1100px"}}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/"><Link to="/" style={{color: "white", textDecoration: "none"}}>AnimeList</Link></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li><a className="dropdown-item" href="/topshows"><Link to="/topshows" style={{color: "white", textDecoration: "none"}}>Top Shows</Link></a></li>
            <li><a className="dropdown-item" href="/allshows"><Link to="/allshows" style={{color: "white", textDecoration: "none"}}>All Shows</Link></a></li>
          </ul>

          {!userContext.isAuthorized &&
            <ul className="navbar-nav me-2 mb-2 mb-lg-0">
              <li><a className="nav-link" aria-current="page" href="/register"><Link to="/register" style={{color: "white", textDecoration: "none"}}>Register</Link></a></li>
              <li><a className="nav-link" aria-current="page" href="/login"><Link to="/login" style={{color: "white", textDecoration: "none"}}>Login</Link></a></li>
            </ul>}

          {userContext.isAuthorized &&
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: "white", textDecoration: "none"}}>
                  {userContext.userName}
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/watchlist"><Link to="/watchlist" style={{color: "black", textDecoration: "none"}}>Watchlist</Link></a></li>
                  <li><a className="dropdown-item" href="/" onClick={handleLogOut} style={{textDecoration: "none"}}>Log Out</a></li>
                </ul>
              </li>
            </ul>
          }

        </div>
      </div>
    </nav>
  );
};

export default Navbar;