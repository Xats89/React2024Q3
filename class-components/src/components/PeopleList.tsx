import { Outlet, useLoaderData } from 'react-router-dom';
import { IPeopleResult } from '../types/types';

export default function PeopleList() {

  const {peoplesData} = useLoaderData() as { peoplesData: IPeopleResult | undefined }
  const peoples = peoplesData?.results
  function handleClick(): void {
  }
  
  return (
    <div>
      <div className="people-list">
        {peoples?.map((el, i) => {
          return (
            <div className="people-list__item" key={i} onClick={() => handleClick()}>
              {el.name}
            </div>
          );
        })}
      </div>
      <Outlet/>
    </div>
  );
}