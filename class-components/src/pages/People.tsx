import MainLayout from '../layouts/MainLayout';
import {
  Await,
  Link,
  Outlet,
  useLoaderData,
  useSearchParams,
} from 'react-router-dom';
import { IPeopleResult } from '../types/types';
import getPage from '../utils/getPage';
import getItemId from '../utils/getItemId';
import Searching from '../components/Searching';
import { Suspense } from 'react';
import Spinner from '../components/Spinner';

export default function People() {
  const { peoplesData } = useLoaderData() as {
    peoplesData: IPeopleResult;
  };

  const [searchParams] = useSearchParams();

  function detailsPageLink() {
    const page = searchParams.get('page');
    const search = searchParams.get('search');
    if (page) return `./where?page=${page}&`;
    else if (search) return `./where?search=${search}&`;
    else return './where?';
  }

  return (
    <MainLayout>
      <>
        <h1>People</h1>
        <Searching />

        <section className="result-wrapper">
          <div>
            <Suspense fallback={<Spinner />}>
              <Await resolve={peoplesData}>
                {(res: IPeopleResult) => (
                  <>
                    <div className="people-list">
                      {res.results?.map((el) => {
                        return (
                          <Link
                            to={`${detailsPageLink()}details=${getItemId(el.url)}`}
                            className="people-list__item"
                            key={getItemId(el.url)}
                          >
                            {el.name}
                          </Link>
                        );
                      })}
                    </div>
                    <div className="pagination">
                      <Link
                        to={`/people/where?${getPage(res.previous)}`}
                        className={
                          'pagination_prev' +
                          (getPage(res.previous) ? '' : ' pagination_disabled')
                        }
                      >
                        Prev
                      </Link>
                      <Link
                        to={`/people/where?${getPage(res.next)}`}
                        className={
                          'pagination_next' +
                          (getPage(res.next) ? '' : ' pagination_disabled')
                        }
                      >
                        Next
                      </Link>
                    </div>
                  </>
                )}
              </Await>
            </Suspense>
          </div>
          <Outlet />
        </section>
      </>
    </MainLayout>
  );
}
