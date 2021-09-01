const HEADERS_PATH = "/headers";
const MY_ACCOUNT_PATH = "/myAccount";
const SHOWS_PATH = "/shows";
const WATCHLIST_PATH = "/watchlist";
const LOGIN_PATH = "/users/login";
const REGISTER_PATH = "/users/register";
const LOG_OUT_PATH = "/users/logout";

export interface HeaderStructure {
  title: string,
  subtitle: string,
  img: string
};

export interface ShowStructure {
  description: string;
  episodes: number;
  genres: string[];
  id: number;
  _id: string;
  img: string;
  name: string;
  score: number | "N/A";
  startedAiring: {
    year: number;
    month: string;
    day: number;
  };
  status: string
};

export interface ShowStructure {
  current: number
  description: string;
  episodes: number;
  genres: string[];
  id: number;
  _id: string;
  img: string;
  name: string;
  score: number | "N/A";
  startedAiring: {
    year: number;
    month: string;
    day: number;
  };
  myScore: number | "N/A";
};

export interface UserStructure {
  email: string;
  password: string;
  username: string;
};

export interface WatchListStructure {
  _id: string;
  current: number;
  episodes: number;
  img: string;
  name: string;
  score: number | "N/A";
  status: string,
  startedAiring: {
    year: number,
    month: string,
    day: number
  },
  watched: number,
  myScore: number | "N/A";
};

export interface PostUserStructure {
  password: string;
  user: string;
};

export interface PostUserLoginStructure {
  password: string;
  username: string;
};

export interface PostShowReviewStructure {
  episodes: number;
  name: string;
  showId: string;
  status: string;
  score: number | "N/A";
};

export function getWatchlist() {
  return fetch(WATCHLIST_PATH)
    .then(res => res.json())
    .catch(error => console.log(error));
};

export function getHeaders() {
  return fetch(HEADERS_PATH)
    .then(res => res.json())
    .catch(error => console.log(error));
};

export function getMyAccount() {
  return fetch(MY_ACCOUNT_PATH)
    .then(res => res.json())
    .catch(error => console.log(error));
};

export function getShows() {
  return fetch(SHOWS_PATH)
    .then(res => res.json())
    .catch(error => console.log(error));
};

export function logOut() {
  return fetch(LOG_OUT_PATH)
    .then(res => res.json())
    .catch(error => console.log(error));
};

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
};

export async function postUserLogin (body: PostUserLoginStructure) {
  return fetch(LOGIN_PATH, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body)
    })
    .then((res) => res.json());
};

export async function postShowReview (body: PostShowReviewStructure) {
  return fetch(WATCHLIST_PATH, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body)
    })
    .then((res) => res.json());
};
