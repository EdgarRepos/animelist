import React from "react";
import AllWatchListCards from "../components/cards/AllWatchListCards";

function TopShows() {
  return (
    <div className="container-fluid mt-5 pt-3">
      <div className="container-fluid mb-4 ps-0 ms-0">
        <h2 className="h4">Watchlist</h2>
      </div>
      <div className="container-fluid">
        <AllWatchListCards />
      </div>
    </div>
  );
};

export default TopShows;