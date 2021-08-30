import React, {useContext, useState} from "react";

import { LoginFields, validateLoginFields } from "../modules/formValidation";
import { postUserLogin } from "../modules/API";

import UserContext from "../context/UserContext";

function LoginForm() {
  const [values, setValues] = useState<LoginFields>({
    password: "",
    username: ""
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

    setValues({
      password: "",
      username: ""
    });
    
    const isFieldValuesValid = validateLoginFields(values);

    if (isFieldValuesValid) {
      const postAnswer = await postUserLogin({
        username: values.username,
        password: values.password
      });

      if (postAnswer.authorized) {
        userContext.setUser(postAnswer.authorized, postAnswer.userId, postAnswer.userName);
      };
    };
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-2">
        <label className="form-label" htmlFor="usernameInput">Username</label>
        <input className="form-control" disabled={userContext.isAuthorized} onChange={handleChange} id="usernameInput" name="username" type="text" value={values.username} />
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="passwordInput">Password</label>
        <input className="form-control" disabled={userContext.isAuthorized} onChange={handleChange} id="passwordInput" name="password" type="password" value={values.password}/>
        {hasSubmitBeenClicked ? <span className="badge text-dark">Wrong username or password</span> : null}
      </div>

      <div className="mt-2 text-center">
        <button className="btn btn-primary" type="submit">Login</button>
      </div>
    </form>
  );
};

export default LoginForm;