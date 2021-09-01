import React, {useEffect, useState} from "react";
import { getHeaders, HeaderStructure } from "../modules/API";

function Carousel() {
  const [data, setData] = useState<HeaderStructure[]>([]);

  useEffect(() => {
    getHeaders().then(headers => setData(headers));
  }, []);

  return (
    
    <div id="carouselCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={data.length ? data[0].img : ""} className="d-block w-100" alt={data.length ? data[0].title : ""}/>
          <div className="carousel-caption d-none d-md-block">
            <h5>{data.length ? data[0].title : ""}</h5>
            <p>{data.length ? data[0].subtitle : ""}</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={data.length ? data[1].img : ""} className="d-block w-100" alt={data.length ? data[1].title : ""}/>
          <div className="carousel-caption d-none d-md-block">
            <h5>{data.length ? data[1].title : ""}</h5>
            <p>{data.length ? data[1].subtitle : ""}</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={data.length ? data[2].img : ""} className="d-block w-100" alt={data.length ? data[2].title : ""}/>
          <div className="carousel-caption d-none d-md-block">
            <h5>{data.length ? data[2].title : ""}</h5>
            <p>{data.length ? data[2].subtitle : ""}</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
  </div>
  
  );
};

export default Carousel;