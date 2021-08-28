import React from "react";

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

export interface PostUserStructure {
  user: string;
  password: string;
}

export interface PostUserLoginStructure {
  username: string,
  password: string,
}

async function postUser(body : UserStructure | PostUserStructure) {
  return fetch(USERS_PATH, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  })
    .then((res) => res.json())
    .then((data) => data);
}

export async function postUserLogin (body: PostUserLoginStructure) {
  return fetch("/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body)
    })
    .then((res) => res.json());
}

export function postNewUser(body : UserStructure) {
  return postUser(body);
}

export function getShows(setFunc : Function) {
  fetch(SHOWS_PATH)
    .then((res) => res.json())
    .then((data) => setFunc(data));
}

// export function putIt(body: UserStructure | ShowStructure, path: string) {
//   fetch(path, {
//     method: "PUT",
//     headers: {
//       "Content-type": "application/json"
//     },
//     body: JSON.stringify(body)
//   })
//     .then((res) => res.json())
//     .then((data) => console.log(data))
  
// }

// export function deleteIt(body: UserStructure | ShowStructure, path: string) {
//   fetch(path, {
//     method: "DELETE",
//     headers: {
//       "Content-type": "application/json"
//     },
//     body: JSON.stringify(body) //you only need to send one "unique" parameter, like name: "name"
//   })
//     .then((res) => res.json())
//     .then((data) => console.log(data))
// }