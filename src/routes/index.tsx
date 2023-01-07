import { lazy } from 'react';
import { IRoute } from '../types';

const routes: IRoute[] = [
  {
    index: true,
    path: '/',
    component: lazy(() => import('pages/Home')),
  },
  {
    index: true,
    path: '/login',
    component: lazy(() => import('pages/Login')),
  },
];

export default routes;
