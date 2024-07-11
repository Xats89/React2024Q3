import { LoaderFunction } from "react-router-dom"
import getSWAPI from "../getSWAPI"

const peopleListLoader: LoaderFunction = async ({ params }) => {
  const key = params.key
  const peoplesData = await getSWAPI(`https://swapi.dev/api/people/?${params.key}`)
  return {peoplesData, key}
}

export {peopleListLoader}