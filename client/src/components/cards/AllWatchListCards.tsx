import React, {useState, useEffect} from "react";
import { ShowStructure, WatchListStructure, getWatchlist } from "../../modules/API";
import WatchListCard from "./individual-cards/WatchListCard";

function AllWatchListCards() {
  const [data, setData] = useState<WatchListStructure[]>([]);

  useEffect(() => {
    getWatchlist().then(shows => setData(shows));
  }, []);

  const renderCards : JSX.Element[] = data.map((anime, index) => {
    const topShowProps : WatchListStructure = {
      _id: anime._id,
      episodes: anime.episodes,
      img: anime.img,
      name: anime.name,
      score: anime.score,
      status: anime.status,
      startedAiring: {
        year: anime.startedAiring.year,
        month: anime.startedAiring.month,
        day: anime.startedAiring.day
      },
      watched: anime.watched,
    }
    return <WatchListCard show={topShowProps} rank={index + 1} key={anime._id}/>
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

export default AllWatchListCards;