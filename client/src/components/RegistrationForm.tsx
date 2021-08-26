import React from "react";

function RegistrationForm() {
  return (
    <div className="container" style={{width: "400px"}}>
      <div className="mb-3">
        <label htmlFor="emailInput" className="form-label">Email address</label>
        <input type="email" className="form-control" id="emailInput" placeholder="user@mail.com"/>
      </div>
      <div className="mb-3">
        <label htmlFor="usernameInput" className="form-label">Username</label>
        <input type="text" className="form-control" id="usernameInput" />
        <span className="badge text-dark">Between 3 and 10 characters</span>
      </div>
      <div className="mb-3">
        <label htmlFor="passwordInput" className="form-label">Password</label>
        <input type="password" className="form-control" id="passwordInput" />
        <span className="badge text-dark">Between 5 and 15 characters</span>
      </div>
    </div>
  )
}

export default RegistrationForm;