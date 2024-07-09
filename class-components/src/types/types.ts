export interface IPeopleResult {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPeople[];
}
export interface IPeople {
  id?: number;
  img?: string;
  name: string;
  height: number;
  mass: number;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

export interface SWFilms {
  count: number;
  next: null | number;
  previous: null | number;
  results: FilmResult[];
}
export interface FilmResult {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
}