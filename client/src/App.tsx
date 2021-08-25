import React, {useState, useEffect} from "react";
import { USERS_PATH, SHOWS_PATH, UserStructure, ShowStructure } from "./module";
import { animes } from "./shows";
import ShowCard from "./components/ShowCard";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(USERS_PATH)
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  const userMessage : UserStructure = {
    id: 1,
    user: "Kagura",
    password: "1234",
    email: "example@mail.com"
  };

  const showMessage : ShowStructure = {
    id: 404,
    name: "",
    startedAiring: {
      year: 404,
      month: "",
      day: 404
    },
    description: "",
    genres: [""],
    episodes: 404,
    img: "",
    score: "N/A"
  };

  function getIt(path: string) {
    fetch(path)
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }

  function postIt(body: UserStructure | ShowStructure, path: string) {

    fetch(path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then((res) => res.json())
      .then((data) => console.log(data.message));
  }

  function putIt(body: UserStructure | ShowStructure, path: string) {
    fetch(path, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
    
  }

  function deleteIt(body: UserStructure | ShowStructure, path: string) {
    fetch(path, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(body) //you only need to send one "unique" parameter, like name: "name"
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
  }

  return (
    <div className="container">
      <header className="App-header">
        <p>{!data ? "Loading..." : data}</p>

        <button 
          type="button"
          className="btn btn-primary"
          onClick={() => getIt(USERS_PATH)}
        >
          GetUser
        </button>

        <button 
          type="button"
          className="btn btn-primary"
          onClick={() => postIt(userMessage, USERS_PATH)}
        >
          PostUser
        </button>

        <button 
          type="button"
          className="btn btn-primary"
          onClick={() => putIt(userMessage, USERS_PATH)}
        >
          PutUser
        </button>

        <button 
          type="button"
          className="btn btn-primary"
          onClick={() => deleteIt(userMessage, USERS_PATH)}
        >
          DeleteUser
        </button>

        <br/>

        <button 
          type="button"
          className="btn btn-primary"
          onClick={() => getIt(SHOWS_PATH)}
        >
          GetShow
        </button>

        <button 
          type="button"
          className="btn btn-primary"
          onClick={() => postIt(showMessage, SHOWS_PATH)}
        >
          PostShow
        </button>

        <button 
          type="button"
          className="btn btn-primary"
          onClick={() => putIt(showMessage, SHOWS_PATH)}
        >
          PutShow
        </button>

        <button 
          type="button"
          className="btn btn-primary"
          onClick={() => deleteIt(showMessage, SHOWS_PATH)}
        >
          DeleteShow
        </button>
      </header>
      
      <div className="container">
        <div className="row">
          <div className="col">
            Column
          </div>
          <ShowCard />
          <div className="col">
            Column
          </div>
        </div>

        <div className="row">
          <div className="col">
            Column
          </div>
          <div className="col">
            Column
          </div>
          <div className="col">
            Column
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
