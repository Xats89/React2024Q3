import MainLayout from '../layouts/MainLayout';
import {Outlet } from 'react-router-dom';

export default function People() {

  return (
    <MainLayout>
      <>
        {/* <Searching baseFetchURL={baseFetchURL} setSWAPIData={setSWAPIData} /> */}
        <h1>People</h1>
        <section className="result-wrapper">
          <Outlet/>
        </section>
      </>
    </MainLayout>
  );
}