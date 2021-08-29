import React, { useState } from "react";
import { isNumber } from "util";
import { postShowReview, PostShowReviewStructure } from "../modules/API";

interface LoginFormObject {
  episodes: number;
  name: string;
}

interface LoginFormProps {
  show: LoginFormObject;
}

function ShowForm({show} : LoginFormProps) {
  const [review, setReview] = useState<PostShowReviewStructure>({
    episodes: 0,
    name: show.name,
    status: "Watching",
    score: "N/A"
  });
  const [hasSubmitBeenClicked, setHasSubmitBeenClicked] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(false);

  function handleChange(e : React.FormEvent<EventTarget>) {
    const {name, value} = e.target as HTMLInputElement;
    setReview({
      ...review,
      [name]: Number(value)
    })
  }

  function handleSubmit(e : React.FormEvent<EventTarget>) {
    e.preventDefault();
    setHasSubmitBeenClicked(true);

    if (isNaN(review.episodes)) {
      setIsValid(false);
    } else {
      setIsValid(true);
      console.log(review);
      postShowReview(review)
    }
  }

  return (
  
    <form onSubmit={handleSubmit}>
      <div className="mb-3 row">
        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Anime Title</label>
        <div className="col-sm-10">
          <h3 className="h5 form-control-plaintext pb-0" id="staticEmail">{show.name}</h3>
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="inputStatus" className="col-sm-2 col-form-label">Status</label>
        <div className="col-sm-2">
          <select className="form-select" id="inputStatus" name="status" onChange={handleChange}>
            <option>Watching</option>
            <option>Plan to watch</option>
            <option>Completed</option>
          </select>
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="inputScore" className="col-sm-2 col-form-label">Episodes watched</label>
        <div className="col-sm-1">
          <input className="form-control" id="inputScore" onChange={handleChange} type="text" name="episodes" value={review.episodes}/>
        </div>
        <div className="col-sm-1">
          <span>/ {show.episodes}</span>
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="scoreSelect" className="col-sm-2 col-form-label">Score</label>
        <div className="col-sm-2">
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
        <button className="btn btn-primary" type="submit" >Submit</button>
      </div>
      
    </form>

  )
}

export default ShowForm;