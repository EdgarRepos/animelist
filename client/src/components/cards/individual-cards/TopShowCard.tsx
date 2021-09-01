import React, {useState} from "react";
import ShowForm from "../../ShowForm";

export interface TopShowStructure {
  current: number;
  img: string;
  score: number | "N/A";
  name: string;
  _id: string;
  episodes: number;
  startedAiring: {
    year: number,
    month: string,
    day: number
  }
  status: string;
  myScore: number | "N/A";
};

interface TopShowProps {
  show: TopShowStructure,
  rank: number
  handleUpdate: () => void

};

function TopShowCard(props : TopShowProps): JSX.Element {
  const [showForm, setShowForm] = useState<boolean>(false);
  const {show, rank, handleUpdate} = props;
  const {year, month, day} = show.startedAiring;

  function handleClick() {
    setShowForm(true);
  };

  function handleOnFormCancel() {
    setShowForm(false);
  }

  function handleOnFormSubmit() {
    setShowForm(false);
  };

  return (
    <div className="d-grid gap-3 topShowCard">
      <div className="bg-light border row">
        <div className="p-2 bg-light border col-1 text-center">
          <p className="mt-4">{rank}</p>
        </div>
        <div className="bg-light border col-7">
          <div className="row">
            <div className="p-1 col-2 text-center">
              <img
                src={show.img}
                className="img-fluid rounded-start showImage"
                alt={show.name}
              />
            </div>
            <div className="p-1 col my-auto mx-auto">
              <h3 className="h5 p-0 m-0">{show.name}</h3>
              <p className="p-0 m-0 episodes-date"><small>{show.episodes} episodes</small></p>
              <p className="p-0 m-0 episodes-date"><small>{month} {day}, {year}</small></p>
            </div>
          </div>
        </div>
        <div className="p-2 bg-light border col-2 text-center">
          <p className="mt-4">
            {!(show.score === "N/A") && (show.score > 5 ? <i className="bi bi-star-fill text-warning"></i> : <i className="bi bi-star-half text-warning"></i>)} {show.score}
          </p>
        </div>
        <div className="p-2 bg-light col-2 border text-center">
          {!showForm && <button className="btn btn-primary mt-4" onClick={handleClick} type="button">Add to WatchList</button>}
        </div>
      </div>
      {showForm && 
        <div className="container-fluid mx-auto showFormDiv">
          <ShowForm show={show} onSubmit={handleOnFormSubmit} onCancel={handleOnFormCancel} onUpdate={handleUpdate} />
        </div>
      }
    </div>
  )
}

export default TopShowCard;