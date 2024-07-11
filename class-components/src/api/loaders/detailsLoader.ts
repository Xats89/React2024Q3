import { LoaderFunction } from "react-router-dom"
import getSWAPI from "../getSWAPI"

const detailsLoader: LoaderFunction = async ({params}) => {
  const details = await getSWAPI(`https://swapi.dev/api/people/${params.id}`)

  return details
}
export {detailsLoader}