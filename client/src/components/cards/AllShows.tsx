import React, {useState, useEffect} from "react";
import { SHOWS_PATH, ShowStructure } from "../../modules/API";
import MainShowCard from "./individual-cards/MainShowCard";

function AllShows() {
  const [data, setData] = useState<ShowStructure[]>([]);

  useEffect(() => {
    fetch(SHOWS_PATH)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const renderCards : JSX.Element[] = data.map(anime => 
    <div key={anime.id} className="col-sm">
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
      <div className="row" key={id}>
        {renderCards[arrayIndex]}
        {renderCards[arrayIndex + 1]}
        {renderCards[arrayIndex + 2]}
      </div>
    )
  })

  return (
    <div className="container">
      {cardRows}
    </div>
  )
}

export default AllShows;