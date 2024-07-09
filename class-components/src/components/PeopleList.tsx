import { IPeople } from '../types/types';
import getItemImage from '../utils/getItemImage';

export default function PeopleList({
  people,
  setDetails,
}: {
  people: IPeople[];
  setDetails: React.Dispatch<React.SetStateAction<IPeople | null>>;
}) {
  
  function handleClick(details: IPeople): void {
    setDetails({...details, img: getItemImage('characters',details.url)})
  }

  
  const peoples = people || [];
  return (
    <div>
      <div className="people-list">
        {peoples.map((el, i) => {
          return (
            <div className="people-list__item" key={i} onClick={() => handleClick(el)}>
              {el.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}
