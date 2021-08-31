import React, {useState, useContext} from "react";

import { postNewUser } from "../modules/API";
import { RegisterFields, validateRegisterFields, ValidRegisterFields, validateEmail, validatePassword, validateUsername } from "../modules/formValidation";

import UserContext from "../context/UserContext";

function RegisterForm() {
  const [values, setValues] = useState<RegisterFields>({
    email: "",
    password: "",
    username: ""
  });
  const [validRegisterFields, setValidRegisterFields] = useState<ValidRegisterFields>({
    email: false,
    password: false,
    username: false
  });
  const [hasSubmitBeenClicked, setHasSubmitBeenClicked] = useState<boolean>(false);
  const userContext = useContext(UserContext);
  

  function handleChange(e : React.FormEvent<EventTarget>) {
    const {name, value} = e.target as HTMLInputElement;
    setValues({
      ...values,
      [name]: value
    });
  };

  async function handleSubmit(e : React.FormEvent<EventTarget>) {
    e.preventDefault();
    setHasSubmitBeenClicked(true);

    setValidRegisterFields({
      email: validateEmail(values.email),
      password: validatePassword(values.password),
      username: validateUsername(values.username)
    });

    setValues({
      email: "",
      password: "",
      username: ""
    });

    const isFieldValuesValid = validateRegisterFields(values);

    if (isFieldValuesValid) {

      const postAnswer = await postNewUser({
        username: values.username,
        password: values.password,
        email: values.email
      });

      if (postAnswer.authorized) {
        userContext.setUser(postAnswer.authorized, postAnswer.userId, postAnswer.userName)
      };
    };
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label" htmlFor="emailInput">Email address</label>
        <input className="form-control" disabled={userContext.isAuthorized} onChange={handleChange} id="emailInput" name="email" placeholder="user@mail.com" type="email" value={values.email} />
        {(hasSubmitBeenClicked && !validRegisterFields.email) && <span className="badge text-dark">Invalid Email</span>}
      </div>

      <div className="mb-2">
        <label className="form-label" htmlFor="usernameInput">Username</label>
        <input className="form-control" disabled={userContext.isAuthorized} onChange={handleChange} id="usernameInput" name="username" type="text" value={values.username} />
        { 
          (validRegisterFields.email && validRegisterFields.password && validRegisterFields.username && !userContext.isAuthorized)
          ? <span className="badge text-dark">Username it's already taken</span>
          : ( (hasSubmitBeenClicked && !validRegisterFields.username) ? <span className="badge text-dark">Invalid username, it has to be between 3 and 10 characters</span> : <span className="badge text-dark">Between 3 and 10 characters</span>)
        }
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="passwordInput">Password</label>
        <input className="form-control" disabled={userContext.isAuthorized} onChange={handleChange} id="passwordInput" name="password" type="password" value={values.password}/>
        {(hasSubmitBeenClicked && !validRegisterFields.password) ? <span className="badge text-dark">Invalid password, it has to be between 5 and 15 characters</span> : <span className="badge text-dark">Between 5 and 15 characters</span>}
      </div>

      <div className="mt-2 text-center">
        {!userContext.isAuthorized ? 
        <button className="btn btn-primary" type="submit">Register</button> :
        <h3>Congratulations {values.username}! You have successfully registed. Now you can enjoy AnimeList to the fullest.</h3>}
      </div>
    </form>
  );
};

export default RegisterForm;