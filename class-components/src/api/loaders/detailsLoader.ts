import { defer, LoaderFunction } from 'react-router-dom';
import getSWAPI from '../getSWAPI';

const detailsLoader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const detailsId = url.searchParams.get('details');
  if(detailsId) {
    const details = getSWAPI(`https://swapi.dev/api/people/${detailsId}`);
    // details.img = `https://starwars-visualguide.com/assets/img/characters/${detailsId}.jpg`
    return defer({ detailsData: details, signal: request.signal });
  }
  return defer({detailsData: null})
};

export { detailsLoader };
