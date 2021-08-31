import React, {useState} from "react";
import { WatchListStructure } from "../../../modules/API";
import ShowForm from "../../ShowForm";

interface WatchListProps {
  show: WatchListStructure;
  rank: number;
  onWatchListUpdate: () => void;
};

function WatchListCard(props : WatchListProps): JSX.Element {
  const [showForm, setShowForm] = useState<boolean>(false);
  const {show, rank, onWatchListUpdate} = props;
  const {year, month, day} = show.startedAiring;

  function handleClick() {
    setShowForm(true);
  };

  function handleOnFormCancel() {
    setShowForm(false);
  }

  function handleOnFormSubmit() {
    setShowForm(false);
    onWatchListUpdate();
  };

  return (
    <div className="d-grid gap-3">
      <div className="bg-light border row">
        <div className="p-2 bg-light border col-1 text-center">
          <p className="mt-4">{rank}</p>
        </div>
        <div className="bg-light border col-7">
          <div className="row">
            <div className="p-1 col-2 text-center">
              <img
                src={show.img}
                className="img-fluid rounded-start"
                alt="..."
                style={{maxHeight: "85px"}}
              />
            </div>
            <div className="p-1 col my-auto mx-auto">
              <h3 className="h5 p-0 m-0">{show.name}</h3>
              <p className="p-0 m-0" style={{fontSize: "14px"}}>{show.watched} / {show.episodes} episodes</p>
              <p className="p-0 m-0" style={{fontSize: "14px"}}>{month} {day}, {year}</p>
            </div>
          </div>
        </div>
        <div className="p-2 bg-light border col-2 text-center">
          <p className="mt-4">{show.score || "N/A"}</p>
        </div>
        <div className="p-2 bg-light col-2 border text-center">
          {!showForm && <button className="btn btn-primary mt-4" onClick={handleClick} type="button" >{show.status}</button>} 
        </div>
      </div>
      {showForm && 
        <div className="container-fluid mx-auto" style={{maxWidth: "400px"}}>
          <ShowForm show={show} onCancel={handleOnFormCancel} onSubmit={handleOnFormSubmit} />
        </div>
      }
    </div>
  )
};

export default WatchListCard;