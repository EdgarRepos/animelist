import React from "react";
import RegisterForm from "../components/RegisterForm";

function Register() {
  return (
    <div className="container-fluid">
      <div className="container mb-4 ms-0 ps-0">
        <h2 className="h4">Register</h2>
      </div>
      <div className="container" style={{width: "400px"}}>
        <h3>Start Using AnimeList</h3>
        <p>Join AnimeList to catalog your anime, compare with your friends and create your own profile.</p>
        <RegisterForm />
      </div>
    </div>
    
  )
}

export default Register;