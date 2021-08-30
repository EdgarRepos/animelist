import React, { useState } from "react";
import { postShowReview, PostShowReviewStructure } from "../modules/API";

interface ShowFormStructure {
  episodes: number;
  name: string;
  _id: string;
};

interface ShowFormProps {
  show: ShowFormStructure;
};

function ShowForm({show} : ShowFormProps) {
  const [review, setReview] = useState<PostShowReviewStructure>({
    episodes: 0,
    name: show.name,
    showId: show._id,
    status: "Watching",
    score: "N/A"
  });

  function handleChange(e : React.FormEvent<EventTarget>) {
    const {name, value} = e.target as HTMLInputElement;
    if (name === "status") {
      setReview({
        ...review,
        [name]: value
      });
    } else {
      setReview({
        ...review,
        [name]: Number(value)
      });
    }
  }

  function handleSubmit(e : React.FormEvent<EventTarget>) {
    e.preventDefault();

    if (!isNaN(review.episodes)) {
      console.log(review);
      postShowReview(review);
    };
  };

  return (
  
    <form onSubmit={handleSubmit}>
      <div className="mb-3 row">
        <label htmlFor="showName" className="col-sm-5 col-form-label">Anime Title</label>
        <div className="col-sm">
          <h3 className="h5 form-control-plaintext pb-0" id="showName">{show.name}</h3>
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="inputStatus" className="col-sm-5 col-form-label">Status</label>
        <div className="col-sm">
          <select className="form-select" id="inputStatus" name="status" onChange={handleChange}>
            <option value="Watching">Watching</option>
            <option value="Plan to watch">Plan to watch</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="inputEpisodes" className="col-sm-5 col-form-label">Episodes watched</label>
        <div className="col-sm">
          <input className="form-control" id="inputEpisodes" onChange={handleChange} type="text" name="episodes" value={review.episodes}/>
        </div>
        <div className="col-sm">
          <span>/ {show.episodes}</span>
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="scoreSelect" className="col-sm-5 col-form-label">Score</label>
        <div className="col-sm">
          <select id="scoreSelect" className="form-select" name="score" onChange={handleChange}>
            <option selected>Select Score</option>
            <option value="10">10 (Masterpiece)</option>
            <option value="9">9 (Great)</option>
            <option value="8">8 (Very Good)</option>
            <option value="7">7 (Good)</option>
            <option value="6">6 (Fine)</option>
            <option value="5">5 (Average)</option>
            <option value="4">4 (Bad)</option>
            <option value="3">3 (Very Bad)</option>
            <option value="2">2 (Horrible)</option>
            <option value="1">1 (Apalling)</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="d-grid gap-2 d-md-flex justify-content-center">
          <button className="btn btn-primary me-md-2" type="submit">Submit</button>
        </div>
      </div>
      
    </form>

  );
};

export default ShowForm;