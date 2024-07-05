export interface Movie {
  node: {
    id: number;
    primaryImage: {
      __typename: string;
      id: string;
      url: string;
      height: number;
      width: number;
    };
    originalTitleText: {
      text: string;
      isOriginalTitle: boolean;
    };
  };
}

export default async function getMovies(): Promise<Movie[]> {
  const url =
    'https://imdb8.p.rapidapi.com/title/v2/get-popular?first=20&country=US&language=en-US';
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '315d5d3e13msh050c1a47de3953bp1f23ddjsn0e304636d62c',
      'x-rapidapi-host': 'imdb8.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result.data.movies.edges;
  } catch (error) {
    console.error(error);
    return [];
  }
}

