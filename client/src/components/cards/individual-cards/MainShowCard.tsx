import React, {useState} from "react";
import {ShowStructure} from "../../../modules/API";
import ShowForm from "../../ShowForm";

interface MainShowCardProps {
  show: ShowStructure
  handleUpdate: () => void
}

function MainShowCard({handleUpdate, show} : MainShowCardProps): JSX.Element {
  const [showForm, setShowForm] = useState<boolean>(false)
  const categories = show.genres.map(genre => 
    <span
      className="badge rounded-pill bg-secondary"
      key={show._id + genre}
    >
      {genre}
    </span>
  );

  if (show.score !== "N/A") {
    show.score = parseFloat(show.score.toFixed(1));
  }

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
    <div className="card mx-auto mb-3 mainShowCard">
      {!showForm 
        ? <>
            <div className="card-header">
              <h3 className="h6 m-1 mb-0 text-center">{show.name}</h3>
              <p className="text-center mb-2 episodes">
                {show.episodes} eps
              </p>
              <div className="text-center" >
                {categories}
              </div>
            </div>

            <div className="row g-0">
              <div className="col">
                <img
                  src={show.img}
                  className="img-fluid rounded-start main-content-image"
                  alt="..."
                />
              </div>

              <div className="col-7 overflow-auto main-content">
                <p className="m-2 elevenText">{show.description}</p>
              </div>
            </div>
          </>
        : <div className="container-fluid mx-auto my-2 showFormDiv">
            <ShowForm
              onCancel={handleOnFormCancel}
              onSubmit={handleOnFormSubmit}
              onUpdate={handleUpdate}
              show={show}
            />
          </div>
      }

      <div className="card-footer">
        <div className="row">
          <div className="col-4 position-relative py-2">
            <p className="airingDate position-absolute top-50 start-50 translate-middle">
              {show.startedAiring.month} {show.startedAiring.day}, {show.startedAiring.year
            }</p>
          </div>
          <div className="col-5 text-center">
            {!showForm &&
              <button className="btn btn-primary addButton" onClick={handleClick} type="button">Add to watchlist</button>
            }
          </div>
          <div className="col-3 position-relative py-2">
            <p className="score position-absolute top-50 start-50 translate-middle">{!(show.score === "N/A") && <i className="bi bi-star"></i>} {show.score}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainShowCard;