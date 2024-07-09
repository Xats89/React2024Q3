import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './pages/MainPage.tsx';
import People from './pages/People.tsx';
import Films from './pages/Films.tsx';
import PageNotFound from './pages/PageNotFound.tsx';
// import App from './App.tsx';
import './index.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/people',
    element: <People />,
  },
  {
    path: '/people/:key',
    element: <People />,
  },
  {
    path: '/films',
    element: <Films />,
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
);
