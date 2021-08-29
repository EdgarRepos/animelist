export const USERS_PATH = "/users";
export const SHOWS_PATH = "/shows";
export const WATCHLIST_PATH = "/watchlist";
export const LOGIN_PATH = "/users/login";
export const REGISTER_PATH = "/users/register";
export const LOG_OUT_PATH = "/users/logout";

export interface ShowStructure {
  description: string;
  episodes: number;
  genres: string[];
  id: number;
  img: string;
  name: string;
  score: number | "N/A";
  startedAiring: {
    year: number;
    month: string;
    day: number;
  };
}

export interface UserStructure {
  email: string;
  password: string;
  username: string;
}

export interface PostUserStructure {
  password: string;
  user: string;
}

export interface PostUserLoginStructure {
  password: string;
  username: string;
}

export interface PostShowReviewStructure {
  episodes: number;
  name: string;
  status: string;
  score: number | "N/A";
}

export function getShows() {
  return fetch(SHOWS_PATH)
    .then(res => res.json())
    .catch(error => console.log(error));
}

export function logOut() {
  return fetch(LOG_OUT_PATH)
    .then(res => res.json())
    .catch(error => console.log(error));
}

export async function postNewUser(body : UserStructure | PostUserStructure) {
  return fetch(REGISTER_PATH, {
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
  return fetch(LOGIN_PATH, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body)
    })
    .then((res) => res.json());
}

export async function postShowReview (body: PostShowReviewStructure) {
  return fetch(WATCHLIST_PATH, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body)
    })
    .then((res) => res.json());
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