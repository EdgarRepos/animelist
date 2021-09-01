import React, {useContext} from "react";
import { Link } from "react-router-dom";

import { logOut } from "../modules/API";
import UserContext from "../context/UserContext";

function Navbar() {
  const userContext = useContext(UserContext);

  function handleLogOut() {
    logOut().then(res => {
      userContext.setUser(res.authorized, "", "")
    });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top mx-auto" id="navbar">
      <div className="container">
        <p className="navbar-brand mb-0"><Link to="/">AnimeList</Link></p>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li><p className="dropdown-item mb-0"><Link to="/topshows">Top Shows</Link></p></li>
            <li><p className="dropdown-item mb-0"><Link to="/allshows">All Shows</Link></p></li>
          </ul>

          {!userContext.isAuthorized &&
            <ul className="navbar-nav me-2 mb-2 mb-lg-0">
              <li><p className="nav-link mb-0" aria-current="page"><Link to="/register">Register</Link></p></li>
              <li><p className="nav-link mb-0" aria-current="page"><Link to="/login">Login</Link></p></li>
            </ul>}

          {userContext.isAuthorized &&
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <p className="nav-link dropdown-toggle mb-0" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {userContext.userName} <i className="bi bi-person-fill"></i>
                </p>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><p className="dropdown-item mb-0"><Link to="/watchlist">Watchlist</Link></p></li>
                  <li><p className="dropdown-item mb-0" onClick={handleLogOut}><Link to="/">Log Out</Link></p></li>
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