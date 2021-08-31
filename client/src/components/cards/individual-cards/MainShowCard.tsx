import React, {useState} from "react";
import {ShowStructure} from "../../../modules/API";
import ShowForm from "../../ShowForm";

interface MainShowCardProps {
  show: ShowStructure
}

function MainShowCard({show} : MainShowCardProps): JSX.Element {
  const [showForm, setShowForm] = useState<boolean>(false)
  const categories = show.genres.map(genre => 
    <span
      className="badge rounded-pill bg-secondary"
      key={genre + show.name}
      style={{fontSize: "8.5px"}}
    >
      {genre}
    </span>
  );

  function handleClick(e : React.FormEvent<EventTarget>) {
    setShowForm(true);
  }

  function handleOnFormCancel() {
    setShowForm(false);
  }

  function handleOnFormSubmit() {
    setShowForm(false);
  };

  return (
    <div className="card mx-auto mb-3" style={{width: "320px"}}>
      
      {!showForm 
        ? <>
            <div className="card-header">
              <h3 className="h6 text-center" >{show.name}</h3>
              <p 
                className="text-center mb-0"
                style={{fontSize: "12px"}}
              >
                {show.episodes} eps
              </p>
              <div className="text-center" >
                {categories}
              </div>
            </div>

            <div className="row g-0">
              <div className="col-6">
                <img
                  src={show.img}
                  className="img-fluid rounded-start"
                  alt="..."
                  style={{maxHeight: "225px"}}
                />
              </div>

              <div className="col-6 overflow-auto" style={{maxHeight: "225px"}}>
                <p className="ms-1 me-1" style={{fontSize: "11px"}}>{show.description}</p>
              </div>
            </div>
          </>
        : <div className="container-fluid mx-auto my-2" style={{maxWidth: "400px"}}>
            <ShowForm
              onCancel={handleOnFormCancel}
              onSubmit={handleOnFormSubmit}
              show={show}
            />
          </div>
      }

      <div className="card-footer">
        <div className="row">
          <div className="col-4 text-center">
            <p className="mb-0" style={{fontSize: "12px"}}>{show.startedAiring.month} {show.startedAiring.day}, {show.startedAiring.year}</p>
          </div>
          <div className="col-5 text-center">
            {!showForm && <button className="btn btn-primary mb-0" onClick={handleClick} style={{fontSize: "11px"}} type="button">Add to watchlist</button>}
          </div>
          <div className="col-3 text-center">
            <p className="mb-0" style={{fontSize: "14px"}}>{show.score}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainShowCard;