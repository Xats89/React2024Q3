export interface SWMovie {
  count: number;
  next: null | number;
  previous: null | number;
  results: MovieResult[];
}
export interface MovieResult {
  title: string;
  episode_id: 4;
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

export default async function getMovies(text: string = ''): Promise<SWMovie> {
  const url = `https://swapi.dev/api/films/?search=${text}`;
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
