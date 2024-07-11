import {  useLoaderData } from "react-router-dom";
import { IPeople } from "../types/types";

export default function Details() {

  const details = useLoaderData() as  IPeople | undefined 
  function handleClick() {
  }

  if (details) {return (
    <ul className='details'>
      <button onClick={handleClick}>X</button>
      <li className='details__item'>
        <img className='details__item_image' src={details.img} alt="people image" />
        name: {details.name}
        birth year: {details.birth_year}
        gener: {details.gender}
      </li>
    </ul>
  );} else {
    return (
      <h3>Details window</h3>
    )
  }
}