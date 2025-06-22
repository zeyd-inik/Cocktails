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

//loaders
import { loader as landingPageLoader } from './pages/LandingPage';
import { loader as singleCocktailPageLoader } from './pages/SingleCocktailPage';

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
        loader: landingPageLoader,
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
        loader: singleCocktailPageLoader,
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
    </>
  );
}

export default App;
