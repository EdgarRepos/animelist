import React, {useState, useEffect} from "react";
import { WatchListStructure, getWatchlist } from "../../modules/API";
import WatchListCard from "./individual-cards/WatchListCard";

function AllWatchListCards() {
  const [data, setData] = useState<WatchListStructure[]>([]);

  useEffect(() => {
    getWatchlist().then(shows => setData(shows));
  }, []);

  function handleUpdate() {
    getWatchlist().then(shows => setData(shows));
  }

  const renderCards : JSX.Element[] = data.map((anime, index) => {
    const topShowProps : WatchListStructure = {
      _id: anime._id,
      current: anime.watched,
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
      myScore: anime.score,
    }
    return <WatchListCard show={topShowProps} index={index + 1} handleUpdate={handleUpdate} key={anime._id}/>
  });

  return (
    <div className="d-grid gap-2">
      <div className="bg-light border row">
        <div className="p-1 col-1 text-center border">
          <p className="my-auto bg-light">#</p>
        </div>
        <div className="p-1 col-6 text-center border">
          <p className="my-auto bg-light">Title</p>
        </div>
        <div className="p-1 col-2 text-center border">
          <p className="my-auto bg-light">Progress</p>
        </div>
        <div className="p-1 col-1 text-center border">
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