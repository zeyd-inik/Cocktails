import './LandingPage.scss';

import axios from 'axios';

import { useLoaderData } from 'react-router';

//components
import SearchBar from '../components/SearchBar';
import CocktailList from './../components/CocktailList';

const cocktailSearchURL =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const loader = async ({ request }) => {
  let searchTerm = new URL(request.url).searchParams.get('search' || '');
  searchTerm = searchTerm || 'a';

  try {
    const response = await axios.get(`${cocktailSearchURL}${searchTerm}`);
    const drinks = response.data.drinks;
    return { drinks };
  } catch (error) {
    return error;
  }
};

function LandingPage() {
  const { drinks, searchTerm } = useLoaderData();

  return (
    <div className="LandingPage">
      <SearchBar searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </div>
  );
}

export default LandingPage;
