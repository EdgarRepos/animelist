import React from "react";
import ShowForm from "../components/ShowForm";

function About() {

  const testObject = {
    name: "Test", 
    episodes: 10
  }

  return (
    <div>
      <div className="container mb-4 ms-0">
        <h2 className="h4">About</h2>
      </div>
      <div className="container mb-4 ms-0">
        <ShowForm show={testObject}/>
      </div>
    </div>
  )
}

export default About;