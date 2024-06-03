import { createBrowserRouter } from 'react-router-dom';
import Dashboard from './pages/dashboard'
import Layout from './components/layout';
import NotFound from './pages/not-found';

const router = createBrowserRouter([
  // Auth routes
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        lazy: async () => ({
          Component: Dashboard,
        }),
      },
    ]
  },
    // Fallback 404 route
    { path: '*', Component: NotFound },
]);

export default router;
