import React, {useState} from "react";
import { WatchListStructure } from "../../../modules/API";
import ShowForm from "../../ShowForm";

interface WatchListProps {
  show: WatchListStructure;
  index: number;
  handleUpdate: () => void;
};

function WatchListCard(props : WatchListProps): JSX.Element {
  const [showForm, setShowForm] = useState<boolean>(false);
  const {show, index, handleUpdate} = props;

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
    <div className="d-grid gap-3 watchListCard">
      <div className="bg-light border row">
        <div className="bg-light border col-1 position-relative">
          <p className="position-absolute start-50 top-50 translate-middle">{index}</p>
        </div>
        <div className="bg-light border col-6">
          <img
            src={show.img}
            className="img-fluid rounded-start showImage"
            alt={show.name}
          />
          <span className="h5 p-0 m-0">{show.name}</span>
        </div>
        <div className="bg-light border col-2 position-relative">
          <p className="position-absolute start-50 top-50 translate-middle text-center">
            {show.watched} / {show.episodes} episodes
          </p>
        </div>
        <div className="bg-light border col-1 position-relative">
          <p className="position-absolute start-50 top-50 translate-middle">{show.score || "N/A"}</p>
        </div>
        <div className="bg-light col-2 border position-relative">
          {!showForm &&
            <div className="position-absolute start-50 top-50 translate-middle">
              <button className="btn btn-primary" onClick={handleClick} type="button">{show.status}</button>
            </div>
          }
        </div>
      </div>
      {showForm && 
        <div className="container-fluid mx-auto showFormDiv">
          <ShowForm show={show} onCancel={handleOnFormCancel} onSubmit={handleOnFormSubmit} onUpdate={handleUpdate} />
        </div>
      }
    </div>
  )
};

export default WatchListCard;