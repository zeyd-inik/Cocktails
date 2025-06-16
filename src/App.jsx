import { createBrowserRouter, RouterProvider } from 'react-router';
import './App.scss';

//Pages
import LayoutPage from './pages/LayoutPage';
import ErrorPage from './pages/ErrorPage';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import SingleCocktailPage from './pages/SingleCocktailPage';

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
      },
      {
        path: 'cocktail/:id',
        element: <SingleCocktailPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
