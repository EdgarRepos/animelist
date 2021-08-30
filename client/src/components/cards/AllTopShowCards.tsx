import React, {useState, useEffect} from "react";
import { ShowStructure, getShows } from "../../modules/API";
import TopShowCard, { TopShowStructure } from "./individual-cards/TopShowCard";

function AllTopShowCards() {
  const [data, setData] = useState<ShowStructure[]>([]);

  useEffect(() => {
    getShows().then(shows => setData(shows));
  }, []);

  const renderCards : JSX.Element[] = data.map((anime, index) => {
    const topShowProps : TopShowStructure = {
      img: anime.img,
      score: anime.score,
      name: anime.name,
      _id: anime._id,
      episodes: anime.episodes,
      startedAiring: {
        year: anime.startedAiring.year,
        month: anime.startedAiring.month,
        day: anime.startedAiring.day
      }
    };
    return <TopShowCard show={topShowProps} rank={index + 1} key={anime.id}/>
  });

  return (
    <div className="d-grid gap-2">
      <div className="bg-light border row">
        <div className="p-1 col-1 text-center border">
          <p className="my-auto bg-light">Rank</p>
        </div>
        <div className="p-1 col-7 text-center border">
          <p className="my-auto bg-light">Title</p>
        </div>
        <div className="p-1 col-2 text-center border">
          <p className="my-auto bg-light">Score</p>
        </div>
        <div className="p-1 col-2 text-center border">
          <p className="my-auto bg-light">Status</p>
        </div>
      </div>
      {renderCards}
    </div>
  );
};

export default AllTopShowCards;