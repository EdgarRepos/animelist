import React from "react";
import AllWatchListCards from "../components/cards/AllWatchListCards";

function Watchlist() {
  return (
    <div className="container mt-5 pt-4">
      <div className="container mb-4 ps-0 ms-0">
        <h2 className="h4">Watchlist</h2>
      </div>
      <div className="container">
        <AllWatchListCards />
      </div>
    </div>
  );
};

export default Watchlist;