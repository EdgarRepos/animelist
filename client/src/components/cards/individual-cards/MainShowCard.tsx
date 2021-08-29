import React from "react";
import {ShowStructure} from "../../../modules/API";

interface MainShowCardProps {
  show: ShowStructure
}

function MainShowCard({show} : MainShowCardProps): JSX.Element {
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
    console.log(show.name);
  }

  return (
    <div className="card mb-3" style={{width: "320px"}}>
      
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

      <div className="card-footer">
        <div className="row">
          <div className="col-4 text-center">
            <p className="mb-0" style={{fontSize: "12px"}}>{show.startedAiring.month} {show.startedAiring.day}, {show.startedAiring.year}</p>
          </div>
          <div className="col-5 text-center">
            <button className="btn btn-primary mb-0" onClick={handleClick} style={{fontSize: "12px"}} type="button">Add to list</button>
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