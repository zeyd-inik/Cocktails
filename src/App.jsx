import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import './App.scss';
import { createBrowserRouter, RouterProvider } from 'react-router';

//Pages
import LayoutPage from './pages/LayoutPage';
import ErrorPage from './pages/ErrorPage';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import SingleCocktailPage from './pages/SingleCocktailPage';
import Newsletter from './pages/Newsletter';

//actions
import { action as newsletterAction } from './pages/Newsletter';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'newsletter',
        element: <Newsletter />,
        action: newsletterAction,
      },
      {
        path: 'cocktail/:id',
        element: <SingleCocktailPage />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        autoClose={3000}
      />
      ;
    </>
  );
}

export default App;
