import { IPeople } from '../types/types';

export default function PeopleList({ people }: { people: IPeople[] }) {
  console.log(people);
  const peoples = people || [];
  return (
    <div>
      <div className='people-list'>
        {peoples.map((el, i) => {
          return <div className='people-list__item' key={i}>{el.name}</div>;
        })}
      </div>
    </div>
  );
}
