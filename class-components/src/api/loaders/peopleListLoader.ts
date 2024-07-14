import { defer, LoaderFunction } from 'react-router-dom';
import getSWAPI from '../getSWAPI';

const peopleListLoader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const pageID = url.searchParams.get('page');
  const searchKey = url.searchParams.get('search');

  try {
    if (searchKey) {
      const getPeoplesData = getSWAPI(
        `https://swapi.dev/api/people/?search=${searchKey}`,
      );
      return defer({ peoplesData: getPeoplesData,  });
    } else {
      const page = pageID ? pageID : '';
      const getSearchingData = getSWAPI(
        `https://swapi.dev/api/people/?page=${page}`,
      );
      return defer({ peoplesData: getSearchingData });
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export { peopleListLoader };
