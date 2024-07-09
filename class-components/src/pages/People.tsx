import MainLayout from '../layouts/MainLayout';
import PeopleList from '../components/PeopleList';
import getSWAPI from '../api/getSWAPI';
import { IPeopleResult } from '../types/types';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Searching from '../components/Searching';
import Details from '../components/Details';

export default function People() {
  const baseFetchURL: string = "https://swapi.dev/api/people"
  const [SWAPIData, setSWAPIData] = useState<IPeopleResult | null>(null);
  const [details, setDetails] = useState(null)

  useEffect(() => {
    (async function getSWAPIData() {
      const people = await getSWAPI(baseFetchURL);
      setSWAPIData(people);
    })();
  }, [setSWAPIData]);

  async function onNext() {
    if(SWAPIData?.next){
      const nexPage = await getSWAPI(SWAPIData?.next)
      setSWAPIData(nexPage)
    }
  }
  async function onPrev() {
    if(SWAPIData?.previous){
      const nexPage = await getSWAPI(SWAPIData?.previous)
      setSWAPIData(nexPage)
    }
  }

  function getNextPageUrl() {
    const nextPage = SWAPIData?.next ? SWAPIData?.next.slice(SWAPIData?.next.lastIndexOf('/')) : ''
    return `/people${nextPage}`
  }
  function getPrevPageUrl() {
    const prevPage = SWAPIData?.previous ? SWAPIData?.previous.slice(SWAPIData?.previous.lastIndexOf('/')) : ''
    return `/people${prevPage}`
  }

  return (
    <MainLayout>
      <>
        <Searching baseFetchURL={baseFetchURL} setSWAPIData={setSWAPIData}/>
        <h1>People</h1>
      <section className='result-wrapper'>
        <PeopleList people={SWAPIData?.results || []} />
        <Details setDetails={setDetails}/>
      </section>
        <div>
          <Link to={getPrevPageUrl()} onClick={()=> onPrev()}>Prev</Link>
          <Link to={getNextPageUrl()} onClick={() => onNext()}>Next</Link>
        </div>
      </>
    </MainLayout>
  );
}
