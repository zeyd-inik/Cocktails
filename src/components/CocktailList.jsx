import './CocktailList.scss';
import CocktailCard from './CocktailCard';

function CocktailList({ drinks }) {
  return (
    <div className="CocktailList">
      {drinks.map((drink) => {
        return (
          <CocktailCard
            drink={drink}
            key={drink.idDrink}
          />
        );
      })}
    </div>
  );
}

export default CocktailList;
