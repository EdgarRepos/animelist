import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/"><Link to="/">AnimeList</Link></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Animes
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="/allshows"><Link to="/allshows">All Shows</Link></a></li>
                <li><a className="dropdown-item" href="/topshows"><Link to="/topshows">Top Shows</Link></a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/about"><Link to="/about">About</Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/support"><Link to="/support">Support</Link></a>
            </li>
          </ul>

          <ul className="navbar-nav me-2 mb-2 mb-lg-0">
            <li><a className="nav-link" aria-current="page" href="/register"><Link to="/register">Register</Link></a></li>
            <li><a className="nav-link" aria-current="page" href="/login"><Link to="/login">Login</Link></a></li>
          </ul>

          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>

        </div>
      </div>
    </nav>
  )
}

export default Navbar;