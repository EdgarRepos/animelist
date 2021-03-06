import React, { useContext } from "react";

import RegisterForm from "../components/RegisterForm";
import UserContext from "../context/UserContext";

function Register() {
  const userContext = useContext(UserContext);

  let title = "Start Using AnimeList";
  let subtitle = "Join AnimeList to catalog your anime, compare with your friends and create your own profile.";

  if (userContext.isAuthorized) {
    title = "Successful Registration";
    subtitle = "Enjoy AnimeList to the fullest!";
  }

  return (
    <div className="container mt-5 pt-4">
      <div className="mb-4 ms-0 ps-0">
        <h2 className="h4">Register</h2>
      </div>
      <div className="container pb-4 registerFormContainer">
        <h3>{title}</h3>
        <p>{subtitle}</p>
        {!userContext.isAuthorized && <RegisterForm />}
      </div>
    </div>
  );
};

export default Register;