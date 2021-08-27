import React, {useState} from "react";

import { postNewUser } from "../modules/API";
import validateFields, { RegisterFields } from "../modules/registerValidation";

function RegisterForm() {
  const [values, setValues] = useState<RegisterFields>({
    email: "",
    password: "",
    username: ""
  })
  const [isValid, setIsValid] = useState<boolean>(false)

  function handleChange(e : React.FormEvent<EventTarget>) {
    const {name, value} = e.target as HTMLInputElement;
    setValues({
      ...values,
      [name]: value
    })
  }

  function handleSubmit(e : React.FormEvent<EventTarget>) {
    e.preventDefault()
    setIsValid(validateFields(values));
    postNewUser({
      id: values.username + values.username.length,
      user: values.username,
      password: values.password,
      email: values.email
    })
    setValues({
      email: "",
      password: "",
      username: ""
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label" htmlFor="emailInput" >Email address</label>
        <input className="form-control" disabled={isValid} onChange={handleChange} id="emailInput" name="email" placeholder="user@mail.com" type="email" value={values.email} />
      </div>

      <div className="mb-2">
        <label className="form-label" htmlFor="usernameInput">Username</label>
        <input className="form-control" disabled={isValid} onChange={handleChange} id="usernameInput" name="username" type="text" value={values.username} />
        <span className="badge text-dark">Between 3 and 10 characters</span>
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="passwordInput">Password</label>
        <input className="form-control" disabled={isValid} onChange={handleChange} id="passwordInput" name="password" type="password" value={values.password}/>
        <span className="badge text-dark">Between 5 and 15 characters</span>
      </div>

      <div className="mt-2 text-center">
        {!isValid ? 
        <button className="btn btn-primary" type="submit">Register</button> :
        <h3>Congratulations {values.username}! You have successfully registed. Now you can enjoy AnimeList to the fullest.</h3>}
      </div>
    </form>
  )
}

export default RegisterForm;