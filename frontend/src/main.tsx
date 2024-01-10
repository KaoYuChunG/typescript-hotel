// import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Root.tsx';
import Home from './views/home/Home.tsx';
import Page404 from './views/Page404/Page404.tsx';
import About from './views/about/About.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> }
    ]
  },
  {
    path: "/*",
    element: <Page404 />,
  }
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}></RouterProvider>);
