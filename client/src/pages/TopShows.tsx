import React from "react";
import AllShowsCards from "../components/cards/AllShowsCards";

function TopShows() {
  return (
    <div className="container-fluid">
      <div className="container-fluid mb-4 ps-0 ms-0">
        <h2 className="h4">Top Shows</h2>
      </div>
      <div className="container-fluid">
        <AllShowsCards />
      </div>
    </div>
  )
}

export default TopShows;