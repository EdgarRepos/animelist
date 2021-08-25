import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { USERS_PATH, SHOWS_PATH, UserStructure, ShowStructure } from "./module";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
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
    id: 1,
    name: "Gintama",
    startedAiring: {
      year: 2006,
      month: "Apr",
      day: 4
    },
    description: "The Amanto, aliens from outer space, have invaded Earth and taken over feudal Japan. As a result, a prohibition on swords has been established, and the samurai of Japan are treated with disregard as a consequence.\n\n However one man, Gintoki Sakata, still possesses the heart of the samurai, although from his love of sweets and work as a yorozuya, one might not expect it. Accompanying him in his jack-of-all-trades line of work are Shinpachi Shimura, a boy with glasses and a strong heart, Kagura with her umbrella and seemingly bottomless stomach, as well as Sadaharu, their oversized pet dog. Of course, these odd jobs are not always simple, as they frequently have run-ins with the police, ragtag rebels, and assassins, oftentimes leading to humorous but unfortunate consequences.\n\n Who said life as an errand boy was easy?",
    genres: ["Action", "Comedy", "Historical", "Sci-Fi"],
    episodes: 201,
    img: "https://cdn.myanimelist.net/images/anime/10/73274.webp",
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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
        <button onClick={() => getIt(USERS_PATH)}>GetUser</button>
        <button onClick={() => postIt(userMessage, USERS_PATH)}>PostUser</button>
        <button onClick={() => putIt(userMessage, USERS_PATH)}>PutUser</button>
        <button onClick={() => deleteIt(userMessage, USERS_PATH)}>DeleteUser</button>
        <br/>
        <button onClick={() => getIt(SHOWS_PATH)}>GetShow</button>
        <button onClick={() => postIt(showMessage, SHOWS_PATH)}>PostShow</button>
        <button onClick={() => putIt(showMessage, SHOWS_PATH)}>PutShow</button>
        <button onClick={() => deleteIt(showMessage, SHOWS_PATH)}>DeleteShow</button>
      </header>
    </div>
  );
}

export default App;
