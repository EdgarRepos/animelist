import React, {useState, useEffect} from "react";
import { ShowStructure, getShows } from "../../modules/API";
import MainShowCard from "./individual-cards/MainShowCard";

function AllShowsCards() {
  const [data, setData] = useState<ShowStructure[]>([]);

  useEffect(() => {
    getShows().then(shows => setData(shows));
  }, []);

  const renderCards : JSX.Element[] = data.map(anime => 
    <div key={anime.id} className="col-md align-self-center">
      <MainShowCard show={anime} />
    </div>
  )

  const rowNumber = Math.ceil(renderCards.length / 3);
  let rowsId = [];
  for (let i = 0; i < rowNumber; i++) {
    rowsId.push(Math.random());
  }

  const cardRows = rowsId.map((id, index) => {
    let arrayIndex = 0;
    if (index !== 0) {
      arrayIndex = index * 3
    }

    return (
      <div className="row justify-content-center" key={id}>
        {renderCards[arrayIndex]}
        {renderCards[arrayIndex + 1]}
        {renderCards[arrayIndex + 2]}
      </div>
    )
  })

  return (
    <div className="container-fluid">
      {cardRows}
    </div>
  )
}

export default AllShowsCards;