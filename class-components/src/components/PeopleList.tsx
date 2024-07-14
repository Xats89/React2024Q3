import { Link, Outlet, useLoaderData } from 'react-router-dom';
import { IPeopleResult } from '../types/types';
import getPage from '../utils/getItemId';

export default function PeopleList() {
  const { peoplesData } = useLoaderData() as {
    peoplesData: IPeopleResult | undefined;
  };
  const peoples = peoplesData?.results;
  const nextPageApi = peoplesData?.next ?peoplesData?.next : ''
  const prevPageApi = peoplesData?.previous ? peoplesData?.previous : ''
  
  console.log(getPage(nextPageApi))
  
  function handleClick(): void {}

  return (
    <div>
      <div className="people-list">
        {peoples?.map((el, i) => {
          return (
            <div
              className="people-list__item"
              key={i}
              onClick={() => handleClick()}
            >
              {el.name}
            </div>
          );
        })}
      </div>
      <div>
        <Link to={`${getPage(prevPageApi)}`} relative="path">Prev</Link>
        <Link to={getPage(nextPageApi) || ''}>Next</Link>
      </div>
      <Outlet />
    </div>
  );
}
