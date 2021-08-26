import { UserStructure, ShowStructure } from "./module";

export const userMessage : UserStructure = {
  id: 1,
  user: "Kagura",
  password: "1234",
  email: "example@mail.com"
};

export const showMessage : ShowStructure = {
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

export function postIt(body: UserStructure | ShowStructure, path: string) {

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