import React, {useContext, useState} from "react";

import { LoginFields, validateLoginFields } from "../modules/formValidation";
import { postUserLogin } from "../modules/API";

import UserContext from "../context/UserContext";

function LoginForm() {
  const [values, setValues] = useState<LoginFields>({
    password: "",
    username: ""
  });
  const [isLoginValid, setIsLoginValid] = useState<boolean>(false);
  const [hasSubmitBeenClicked, setHasSubmitBeenClicked] = useState<boolean>(false);
  const userContext = useContext(UserContext);

  function handleChange(e : React.FormEvent<EventTarget>) {
    const {name, value} = e.target as HTMLInputElement;
    setValues({
      ...values,
      [name]: value
    })
  }

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
        userContext.setUser(true, postAnswer.userId, postAnswer.userName);
      }
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-2">
        <label className="form-label" htmlFor="usernameInput">Username</label>
        <input className="form-control" disabled={isLoginValid} onChange={handleChange} id="usernameInput" name="username" type="text" value={values.username} />
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="passwordInput">Password</label>
        <input className="form-control" disabled={isLoginValid} onChange={handleChange} id="passwordInput" name="password" type="password" value={values.password}/>
        {hasSubmitBeenClicked && isLoginValid ? <span className="badge text-dark">Wrong username or password</span> : null}
      </div>

      <div className="mt-2 text-center">
        {!userContext.isAuthorized
          ? <button className="btn btn-primary" type="submit">Login</button>
          : <h3>Welcome back! Enjoy AnimeList to the fullest.</h3>
        }
      </div>
    </form>
  )
}

export default LoginForm;