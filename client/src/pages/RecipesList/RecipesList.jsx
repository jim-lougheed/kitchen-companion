import { useEffect, useState } from "react";
import axios from "axios";

import ListedRecipe from "../../components/ListedRecipe";
import { Spin, Space } from "antd";

import "./RecipesList.scss";

function RecipesList({ match: { params } }) {

  //Loaded state for listed recipes
  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    //Retrieve searched recipes data
    axios
      .get(`/recipes/${params.search}`)
      .then(({ data }) => {
        setRecipes(data.results);
      })
      .catch((err) => console.error(err));
  }, [params.search]);

  return (
    <>
      <h1 className="recipe-list__header">Results</h1>
      {recipes ? (
        <ul className="recipe-list__container">
          {recipes.map((recipe) => {
            return <ListedRecipe key={recipe.id} recipe={recipe} />;
          })}
        </ul>
      ) : (
        //Loading icon while recipe data is being collected
        <Space size="large">
          <Spin size="large" tip="Loading..." className="loading-message" />
        </Space>
      )}
    </>
  );
}

export default RecipesList;
