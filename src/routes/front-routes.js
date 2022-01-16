import { lazy, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { routeParse } from '@utils';

const frontRoutes = [
  {
    path: '/',
    element: lazy(() => import('@components/Layout/FrontLayout')),
    children: [
      { path: '', element: lazy(() => import('@pages/index')) },
      { path: '404', element: lazy(() => import('@pages/NotFound')) },
    ],
  },
];

const FrontRoutes = () => {
  const elements = useRoutes(routeParse(frontRoutes));
  return <Suspense fallback={<div>로딩</div>}>{elements}</Suspense>;
};

export default FrontRoutes;
