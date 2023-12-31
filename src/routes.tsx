import { RouteObject } from 'react-router-dom';
import Root from '@/pages/Layout/Root';
import ErrorBoundary from '@/pages/Layout/ErrorBoundary';
import UpgradeReact from '@/pages/Update/UpgradeReact';
import UpgradePlugin from '@/pages/Update/UpgradePlugin';
import Setup from '@/pages/Setup/Setup';
import PackageLockGuard from '@/pages/Layout/PackageLockGuard';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorBoundary />,
    handle: {
      crumb: 'Home',
    },
    children: [
      {
        path: '',
        element: <Setup />,
      },
      {
        path: '',
        element: <PackageLockGuard />,
        children: [
          {
            path: 'upgrade-react',
            element: <UpgradeReact />,
            handle: {
              crumb: 'Upgrade React',
            },
          },
          {
            path: 'upgrade-plugin',
            element: <UpgradePlugin />,
            handle: {
              crumb: 'Upgrade Plugin',
            },
          },
        ],
      },
    ],
  },
];

export default routes;
