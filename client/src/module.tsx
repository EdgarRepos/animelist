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
  id: number;
  user: string;
  password: string;
  email: string;
  country?: number;
}
