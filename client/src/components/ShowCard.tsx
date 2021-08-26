import React from "react";
import {ShowStructure} from "../module";

interface ShowCardProps {
  show: ShowStructure
}

function ShowCard({show} : ShowCardProps): JSX.Element {
  const categories = show.genres.map(genre => 
    <span 
      className="badge rounded-pill bg-secondary"
      key={genre + show.name}
      style={{fontSize: "8.5px"}}
    >
      {genre}
    </span>);

  return (
    <div className="card" style={{width: "320px"}}>
      
      <div className="card-header">
        <h3 className="h6 text-center" >{show.name}</h3>
        
        <p 
          className="text-center"
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
        <div className="col-1">
      
        </div>
        <div className="col-5 overflow-auto" style={{maxHeight: "225px"}}>
          <p style={{fontSize: "11px"}}>{show.description}</p>
        </div>
      </div>

      <div className="card-footer">
        <div className="row">
          <div className="col-8">
            <p>{show.startedAiring.month} {show.startedAiring.day}, {show.startedAiring.year}</p>
          </div>

          <div className="col-4">
            {show.score}
          </div>
        </div>
      </div>

    </div>
  )
}

export default ShowCard;