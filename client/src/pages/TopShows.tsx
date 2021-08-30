import React from "react";
import AllTopShowCards from "../components/cards/AllTopShowCards";

function TopShows() {
  return (
    <div className="container-fluid mt-5 pt-3">
      <div className="container-fluid mb-4 ps-0 ms-0">
        <h2 className="h4">Top Shows</h2>
      </div>
      <div className="container-fluid">
        <AllTopShowCards />
      </div>
    </div>
  );
};

export default TopShows;