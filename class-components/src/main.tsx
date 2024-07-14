import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './pages/MainPage.tsx';
import People from './pages/People.tsx';
import './index.scss';
// import PeopleList from './components/PeopleList.tsx';
import { peopleListLoader } from './api/loaders/peopleListLoader.ts';
import Details from './components/Details.tsx';
import { detailsLoader } from './api/loaders/detailsLoader.ts';
import PageNotFound from './pages/PageNotFound.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: 'people',
    element: <People />,
    loader: peopleListLoader,
    children: [
      {
        path: ':key',
        element: <Details />,
        loader: detailsLoader,
      },
    ],
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
