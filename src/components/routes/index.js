import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import Community from '../../pages/Community';
import Documentation from '../../pages/Documentation';
import Message from '../../pages/Message';
import Profil from '../../pages/Profil';
import Trending from '../../pages/Trending';
import ProfilDocsThread from '../ProfilDocsThread';
import ProfilThread from '../ProfilThread';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Community />,
  },
  {
    path: '/documentation',
    element: <Documentation />,
  },
  {
    path: '/message',
    element: <Message />,
  },
  {
    path: '/profil',
    element: <Profil />,
    children: [
      { path: '', element: <ProfilThread /> },
      { path: 'docs', element: <ProfilDocsThread /> },
    ],
  },
  {
    path: '/trending',
    element: <Trending />,
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
