import React, {useContext} from "react";
import { Redirect } from "react-router";

import LoginForm from "../components/LoginForm";
import UserContext from "../context/UserContext";

function Login() {
  const userContext = useContext(UserContext);

  if (userContext.isAuthorized) {
    return <Redirect from="/login" to="/" />
  }

  return (
    <div className="container mt-5 pt-4">
      <div className="mb-4 ms-0 ps-0">
        <h2 className="h4">Login</h2>
      </div>
      <div className="container pb-4 loginFormContainer">
        {!userContext.isAuthorized && <LoginForm />}
      </div>
    </div>
  );
};

export default Login;