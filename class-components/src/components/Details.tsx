import {
  Await,
  useLoaderData,
  useNavigation,
  useSearchParams,
} from 'react-router-dom';
import { IPerson } from '../types/types';
import { Suspense } from 'react';
import Spinner from './Spinner';
import ImageWithSpinner from './ImageWhithSpinner';

export default function Details() {
  const { detailsData } = useLoaderData() as {
    detailsData: IPerson | undefined;
  };
  const [searchParams] = useSearchParams();
  const navigation = useNavigation();
  function handleClick() {}

  return (
    <div className="details">
      {navigation.state === 'loading' ? (
        <>
          <Spinner />
        </>
      ) : (
        <Suspense
          fallback={
            <>
              <Spinner />
            </>
          }
        >
          <Await resolve={detailsData}>
            {(resolveDetails) => {
              if (!resolveDetails) return <h4>Details window</h4>;
              resolveDetails.img = `https://starwars-visualguide.com/assets/img/characters/${searchParams.get('details')}.jpg`;
              
              return (
                <>
                  <ImageWithSpinner src={`https://starwars-visualguide.com/assets/img/characters/${searchParams.get('details')}.jpg`} />
                  <button
                    className="details__close-button"
                    onClick={handleClick}
                  >
                    X
                  </button>
                  <ul className="details__descriptopns-list">
                    <li>Name: {resolveDetails.name}</li>
                    <li>Gender: {resolveDetails.gender}</li>
                    <li>Birth year: {resolveDetails.birth_year}</li>
                    <li>Eye color: {resolveDetails.eye_color}</li>
                    <li>Hair color: {resolveDetails.hair_color}</li>
                  </ul>
                </>
              );
            }}
          </Await>
        </Suspense>
      )}
    </div>
  );
}

// &emsp
