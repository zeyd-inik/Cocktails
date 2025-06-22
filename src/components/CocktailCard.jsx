import './CocktailCard.scss';
import { Link } from 'react-router';
import drinkPhoto from './photo.jpg';

function CocktailCard({ drink }) {
  const {
    strDrinkThumb: photo,
    strDrink: name,
    strGlass: glass,
    strAlcoholic: type,
    idDrink: id,
  } = drink;
  return (
    <div className="CocktailCard">
      <img
        src={photo}
        alt="Cocktail"
      />
      <div className="card_info">
        <h4 className="name">{name}</h4>
        <span className="glass">{glass}</span>
        <span className="type">{type}</span>
        <Link to={`cocktail/${id}`}>Details</Link>
      </div>
    </div>
  );
}

export default CocktailCard;
