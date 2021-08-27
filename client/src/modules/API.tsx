export const USERS_PATH = "/api/users";
export const SHOWS_PATH = "/api/shows";

export interface ShowStructure {
  id: number;
  name: string;
  startedAiring: {
    year: number,
    month: string,
    day: number
  };
  description: string;
  genres: string[];
  episodes: number;
  img: string;
  score: number | "N/A";
}

export interface UserStructure {
  id: string;
  user: string;
  password: string;
  email: string;
}

export function postNewUser(body: UserStructure | ShowStructure) {

  fetch(USERS_PATH, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  })
    .then((res) => res.json())
    .then((data) => console.log(data.message));
}

export function putIt(body: UserStructure | ShowStructure, path: string) {
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

export function deleteIt(body: UserStructure | ShowStructure, path: string) {
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