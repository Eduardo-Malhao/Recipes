import { useEffect, useState } from 'react';
import copy from 'clipboard-copy';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import shareIcon from '../images/shareIcon.svg';
import favoriteBtn from '../images/blackHeartIcon.svg';

function FavoriteRecipes() {
  const [filterRecipes, setFilterRecipes] = useState([]);
  const [status, setStatus] = useState(false);

  const madeRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));

  const mealsFilter = () => {
    const meals = madeRecipes.filter((recipe) => recipe.type === 'meal');
    setFilterRecipes(meals);
  };

  const drinksFilter = () => {
    const drinks = madeRecipes.filter((recipe) => recipe.type === 'drink');
    setFilterRecipes(drinks);
  };

  const allFoodsFilter = () => {
    setFilterRecipes(madeRecipes);
  };

  useEffect(() => {
    const madeRecipesJson = JSON.parse(localStorage.getItem('favoriteRecipes'));
    setFilterRecipes(madeRecipesJson);
  }, []);
  const deleteFavorite = (id) => {
    const recItems = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const returnIndex = recItems.findIndex((item) => item.id === id);
    recItems.splice(returnIndex, 1);
    console.log(returnIndex);
    localStorage.setItem('favoriteRecipes', JSON.stringify(recItems));
    const localRecipesJSON = JSON.parse(localStorage.getItem('favoriteRecipes'));
    console.log(localRecipesJSON);
    setFilterRecipes(localRecipesJSON);
  };

  return (
    <section>
      <Header />
      <nav>
        <button
          type="button"
          name="all"
          data-testid="filter-by-all-btn"
          value="all"
          onClick={ () => allFoodsFilter() }
        >
          All
        </button>
        <button
          type="button"
          name="meal"
          data-testid="filter-by-meal-btn"
          onClick={ () => mealsFilter() }
        >
          Meals
        </button>
        <button
          type="button"
          data-testid="filter-by-drink-btn"
          onClick={ () => drinksFilter() }
        >
          Drinks
        </button>
      </nav>
      <div>

        {filterRecipes.map((recipe, index) => (
          <div key={ recipe.id }>
            <div>
              <Link to={ `/${recipe.type}s/${recipe.id}` }>
                <img
                  data-testid={ `${index}-horizontal-image` }
                  src={ recipe.image }
                  alt={ recipe.name }
                  className="img"
                  width="10"
                  height="10"
                />
              </Link>
            </div>
            <div>
              <Link to={ `/${recipe.type}s/${recipe.id}` }>
                <p
                  data-testid={ `${index}-horizontal-name` }
                >
                  {`Name: ${recipe.name}`}
                </p>
              </Link>
              <p
                data-testid={ `${index}-horizontal-top-text` }
              >
                {`Category-nationality: ${recipe.nationality} - ${recipe.category}`}
              </p>
              {
                recipe.doneDate !== undefined
                  && (
                    <p
                      data-testid={ `${index}-horizontal-done-date` }
                    >
                      {`Done in :
                  ${new Date(recipe.doneDate).getDate()}/${new Date(recipe.doneDate)
                      .getMonth() + 1}/${new Date(recipe.doneDate).getFullYear()}`}
                    </p>
                  )
              }
              <p data-testid={ `${index}-horizontal-top-text` }>
                {recipe.alcoholicOrNot}
              </p>
              <div>
                <button
                  type="button"
                  onClick={ () => {
                    copy(`http://localhost:3000/${recipe.type}s/${recipe.id}`);
                    setStatus(true);
                  } }
                >
                  <img
                    data-testid={ `${index}-horizontal-share-btn` }
                    src={ shareIcon }
                    alt="share"
                  />
                </button>
                <button
                  type="button"
                  onClick={ () => deleteFavorite(recipe.id) }
                >
                  <img
                    data-testid={ `${index}-horizontal-favorite-btn` }
                    src={ favoriteBtn }
                    alt="favorite"
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h4>
        {
          !status ? '' : 'Link copied!'
        }
      </h4>
    </section>
  );
}

export default FavoriteRecipes;

// Feito por Elaine e Arthur
