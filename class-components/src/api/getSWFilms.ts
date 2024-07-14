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

export default async function getFilms(): Promise<SWFilms> {
  const url = 'https://swapi.dev/api/films';
  const options = {
    method: 'GET',
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
