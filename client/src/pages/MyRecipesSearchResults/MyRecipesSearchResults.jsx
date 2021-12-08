import { useEffect, useState } from "react";
import axios from "axios";

import ListedRecipe from "../../components/ListedRecipe";
import { Space, Spin } from "antd";

function MyRecipesSearchResults({ match: { params } }) {
  //Set params variables
  const keyword = params.search.substring(0, params.search.length - 6);
  const restriction = params.search.substring(
    params.search.length - 5,
    params.search.length
  );

  //Loaded myRecipes into state
  const [myRecipes, setMyRecipes] = useState(null);

  useEffect(() => {
    //Retrieve myRecipes
    axios
      .get(`/myrecipes`)
      .then(({ data }) => {
        setMyRecipes(data);
      })
      .catch((err) => console.error(err));
  }, [params.search]);

  return (
    <>
      <h1 className="recipe-list__header">Results</h1>
      {myRecipes ? (
        <ul className="recipe-list__container">
          {myRecipes.map((recipe) => {

            //Filter displayed results by keyword + restrictions
            if (restriction === "vegan") {
              if (
                (recipe.extendedIngredients
                  .toLowerCase()
                  .includes(keyword.toLowerCase()) ||
                  recipe.analyzedInstructions
                    .toLowerCase()
                    .includes(keyword.toLowerCase()) ||
                  recipe.dishTypes
                    .toLowerCase()
                    .includes(keyword.toLowerCase()) ||
                  recipe.cuisines
                    .toLowerCase()
                    .includes(keyword.toLowerCase())) &&
                recipe.vegan === 1
              ) {
                return (
                  <ListedRecipe
                    key={recipe.id}
                    componentClassName="recipe-list"
                    recipe={recipe}
                  />
                );
              }
            } else if (restriction === "veget") {
              if (
                (recipe.extendedIngredients
                  .toLowerCase()
                  .includes(keyword.toLowerCase()) ||
                  recipe.analyzedInstructions
                    .toLowerCase()
                    .includes(keyword.toLowerCase()) ||
                  recipe.dishTypes
                    .toLowerCase()
                    .includes(keyword.toLowerCase()) ||
                  recipe.cuisines
                    .toLowerCase()
                    .includes(keyword.toLowerCase())) &&
                recipe.vegetarian === 1
              ) {
                return (
                  <ListedRecipe
                    key={recipe.id}
                    componentClassName="recipe-list"
                    recipe={recipe}
                  />
                );
              }
            } else if (restriction === "daiFr") {
              if (
                (recipe.extendedIngredients
                  .toLowerCase()
                  .includes(keyword.toLowerCase()) ||
                  recipe.analyzedInstructions
                    .toLowerCase()
                    .includes(keyword.toLowerCase()) ||
                  recipe.dishTypes
                    .toLowerCase()
                    .includes(keyword.toLowerCase()) ||
                  recipe.cuisines
                    .toLowerCase()
                    .includes(keyword.toLowerCase())) &&
                recipe.dairyFree === 1
              ) {
                return (
                  <ListedRecipe
                    key={recipe.id}
                    componentClassName="recipe-list"
                    recipe={recipe}
                  />
                );
              }
            } else if (restriction === "gluFr") {
              if (
                (recipe.extendedIngredients
                  .toLowerCase()
                  .includes(keyword.toLowerCase()) ||
                  recipe.analyzedInstructions
                    .toLowerCase()
                    .includes(keyword.toLowerCase()) ||
                  recipe.dishTypes
                    .toLowerCase()
                    .includes(keyword.toLowerCase()) ||
                  recipe.cuisines
                    .toLowerCase()
                    .includes(keyword.toLowerCase())) &&
                recipe.glutenFree === 1
              ) {
                return (
                  <ListedRecipe
                    key={recipe.id}
                    componentClassName="recipe-list"
                    recipe={recipe}
                  />
                );
              }
            } else if (
              recipe.extendedIngredients
                .toLowerCase()
                .includes(keyword.toLowerCase()) ||
              recipe.analyzedInstructions
                .toLowerCase()
                .includes(keyword.toLowerCase()) ||
              recipe.dishTypes.toLowerCase().includes(keyword.toLowerCase()) ||
              recipe.cuisines.toLowerCase().includes(keyword.toLowerCase())
            ) {
              return (
                <ListedRecipe
                  key={recipe.id}
                  componentClassName="recipe-list"
                  recipe={recipe}
                />
              );
            }
            return null;
          })}
        </ul>
      ) : (
          
        //Loading icon while retrieving data
        <Space size="large">
          <Spin size="large" tip="Loading..." className="loading-message" />
        </Space>
      )}
    </>
  );
}

export default MyRecipesSearchResults;
