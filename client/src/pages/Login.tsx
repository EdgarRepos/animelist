import React from "react";
import LoginForm from "../components/LoginForm";

function Login() {
  return (
    <div className="container-fluid">
      <div className="container mb-4 ms-0 ps-0">
        <h2 className="h4">Login</h2>
      </div>
      <div className="container" style={{width: "400px"}}>
        <LoginForm />
      </div>
    </div>
  )
}

export default Login;