import { Link, useLoaderData } from 'react-router';
import './SingleCocktailPage.scss';
import axios from 'axios';

const cocktailSearchById =
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

export const loader = async ({ params }) => {
  const { id } = params;

  try {
    const res = await axios.get(`${cocktailSearchById}${id}`);
    const drink = res.data.drinks[0];
    console.log(drink);
    return drink;
  } catch (error) {
    return error;
  }
};

function SingleCocktailPage() {
  const drink = useLoaderData();

  const ingredients = Object.keys(drink).filter((key) => {
    return key.startsWith('strIngredient') && drink[key] !== null;
  });

  const {
    strDrink: name,
    strDrinkThumb: photo,
    strCategory: category,
    strAlcoholic: type,
    strGlass: glass,
    strInstructions: instructions,
  } = drink;

  return (
    <div className="SingleCocktailPage">
      <div className="wrapper">
        <Link to={'/'}>Back Home</Link>
        <h3>{name}</h3>
        <div className="flex_container">
          <img
            src={photo}
            alt=""
          />
          <div className="info">
            <div>
              <span>Name : </span>
              {name}
            </div>
            <div>
              <span>Category : </span>
              {category}
            </div>
            <div>
              <span>Info : </span>
              {type}
            </div>
            <div>
              <span>Glass : </span>
              {glass}
            </div>
            <div>
              <span>Ingredients : </span>
              {ingredients.map((ingredient) => {
                return drink[ingredient] + ', ';
              })}
            </div>
            <div>
              <span>Instructions : </span>
              {instructions}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleCocktailPage;
