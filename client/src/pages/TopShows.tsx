import React from "react";
import AllTopShowCards from "../components/cards/AllTopShowCards";

function TopShows() {
  return (
    <div className="containermt-5 pt-4">
      <div className="container mb-4 ps-0 ms-0">
        <h2 className="h4">Top Shows</h2>
      </div>
      <div className="container">
        <AllTopShowCards />
      </div>
    </div>
  );
};

export default TopShows;
