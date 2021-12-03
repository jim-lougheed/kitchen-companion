import { useEffect, useState } from "react";
import axios from "axios";

import RecipeTags from "../RecipeTags";
import ListedRecipeNoImage from "../ListedRecipeNoImage";

import { Card, Button, Timeline, Tabs, Popover } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "./ActiveRecipe.scss";

function ActiveRecipe({ params, addToShoppingList }) {
  const [recipe, setRecipe] = useState(null);
  const [relatedRecipes, setRelatedRecipes] = useState(null);

  useEffect(() => {
    const id = params.recipeId;
    axios
      .get(`/recipe/${id}`)
      .then(({ data }) => {
        setRecipe(data);
      })
      .catch((err) => console.error(err));

    axios.get(`/recipe/relatedTo/${id}`).then(({ data }) => {
      console.log(data);
      setRelatedRecipes(data);
    });
  }, [params.recipeId]);

  const handleAddToFavourites = () => {
      
    const recipeBody = {
      id: recipe.id,
      user_id: 1,
      summary: recipe.summary.substr(0, 1200),
      title: recipe.title,
      image: recipe.image ? recipe.image : 'http://via.placeholder.com/556x370.png?text=No+Image+Available',
      analyzedInstructions: JSON.stringify(recipe.analyzedInstructions),
      cuisines: JSON.stringify(recipe.cuisines),
      dairyFree: recipe.dairyFree,
      diets: JSON.stringify(recipe.diets),
      dishTypes: JSON.stringify(recipe.dishTypes),
      extendedIngredients: JSON.stringify(recipe.extendedIngredients),
      glutenFree: recipe.glutenFree,
      servings: recipe.servings,
      readyInMinutes: recipe.readyInMinutes,
      vegan: recipe.vegan,
      vegetarian: recipe.vegetarian,
    };
    axios
      .post("/myrecipes", recipeBody)
      .then(({ data }) => console.log(`Added recipe to MyFavourites: ${data}`))
      .catch((err) => console.error(err));
  };

  const { TabPane } = Tabs;
  
  return (
    <>
      {recipe ? (
          
        <div>
          <div className="recipe__container">
            <Card className="recipe__img-ingredients-container">
              <img src={recipe.image ? recipe.image : 'http://via.placeholder.com/556x370.png?text=No+Image+Available'} alt={recipe.title} />
              <div dangerouslySetInnerHTML={{__html: recipe.summary}}/>
            </Card>
            <Card className="recipe__name-directions-container">
              <h2>{recipe.title}</h2>
              <Tabs defaultActiveKey="1">
                <TabPane tab="Ingredients" key="1">
                  {recipe.extendedIngredients.map((ingredient) => {
                    return (
                      <Timeline key={ingredient.id}>
                        <form
                          onSubmit={(e) =>
                            addToShoppingList(
                              e,
                              e.target.children[0].attributes.name.nodeValue
                            )
                          }
                          className='recipe__ingredient-container'
                        >
                          <Timeline.Item className='recipe__ingredient' name={ingredient.name}>
                            {ingredient.originalString}
                          </Timeline.Item>
                          <Popover content={`Add ${ingredient.name.toUpperCase()} to Shopping List`} trigger='hover'>
                          <Button htmlType="submit" shape="circle" size='small'>
                            {<PlusOutlined />}
                          </Button>
                          </Popover>
                        </form>
                      </Timeline>
                    );
                  })}
                </TabPane>
                <TabPane tab="Directions" key="2">
                  {recipe.analyzedInstructions &&
                    recipe.analyzedInstructions[0].steps.map((step) => {
                      return (
                        <Timeline key={step.number}>
                          <Timeline.Item className="recipe__step">
                            {step.step}
                          </Timeline.Item>
                        </Timeline>
                      );
                    })}
                </TabPane>
              </Tabs>
            </Card>
            <div className='recipe__add-related-container'>
            <Button className='recipe__add-button' onClick={handleAddToFavourites} shape="round">
              {<PlusOutlined />} Add to MyRecipes
            </Button>
            <ul className="related-recipes__container">
            {relatedRecipes &&
              relatedRecipes.map((recipe) => {
                return <ListedRecipeNoImage key={recipe.id} recipe={recipe} />;
              })}
            </ul>
            </div>
          </div>
          <RecipeTags recipe={recipe} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default ActiveRecipe;
