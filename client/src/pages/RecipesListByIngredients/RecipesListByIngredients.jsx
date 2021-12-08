import { useEffect, useState } from "react";
import axios from "axios";

import ListedRecipe from "../../components/ListedRecipe";
import { Space, Spin } from "antd";

function RecipesListByIngredients({ match: { params } }) {

  //Loaded recipe search results into state
  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    
    //Retrieve search result recipes data and set to state
    axios
      .get(`/recipes/byIngredients/${params.ingredients}`)
      .then(({ data }) => {
        setRecipes(data);
      })
      .catch((err) => console.error(err));
  }, [params.ingredients]);

  return (
    <>
      <h1 className="recipe-list__header">Results</h1>
      {recipes ? (
        <ul className="recipe-list__container">
          {recipes.map((recipe) => {
            return (
              <ListedRecipe
                key={recipe.id}
                componentClassName="recipe-list"
                recipe={recipe}
              />
            );
          })}
        </ul>
      ) : (
        //Loading icon while recipe data is being retrieved
        <Space size="large">
          <Spin size="large" tip="Loading..." className="loading-message" />
        </Space>
      )}
    </>
  );
}

export default RecipesListByIngredients;