import { IPeople } from '../types/types';
export default function Details({
  details,
  setDetails,
}: {
  details: IPeople | null;
  setDetails: React.Dispatch<React.SetStateAction<IPeople | null >>;
}) {

  function handleClick() {
    setDetails(null)
  }
  if (details) {return (
    <ul className='details'>
      <button onClick={handleClick}>X</button>
      <li className='details__item'>
        <img className='details__item_image' src={details.img} alt="people image" />
        name: {details?.name}
        birth year: {details?.birth_year}
        gener: {details?.gender}
      </li>
    </ul>
  );} else {
    return (
      <h3>Details window</h3>
    )
  }
}
