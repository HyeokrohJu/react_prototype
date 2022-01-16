import { lazy, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { routeParse } from '@utils';

const sysAdmRoutes = [
  {
    path: '/sysadm',
    element: lazy(() => import('@components/Layout/SysAdmLayout')),
    children: [
      { path: '', element: lazy(() => import('@pages/index')) },
      { path: '404', element: lazy(() => import('@pages/NotFound')) },
    ],
  },
];

const SysAdmRoutes = () => {
  const elements = useRoutes(routeParse(sysAdmRoutes));
  return <Suspense fallback={<div>로딩</div>}>{elements}</Suspense>;
};

export default SysAdmRoutes;
