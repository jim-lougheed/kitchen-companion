import { useEffect, useState } from "react";
import axios from "axios";

import RecipeTags from "../RecipeTags";
import ListedRecipeNoImage from "../ListedRecipeNoImage";

import { calculateTime, removeLastSentence } from "../../utils/helpers";

import { Card, Button, Timeline, Tabs, Popover, Spin, Space, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "./ActiveRecipe.scss";

function ActiveRecipe({ params, addToShoppingList }) {
  const [recipe, setRecipe] = useState(null);
  const [relatedRecipes, setRelatedRecipes] = useState(null);
  const [isSuccessfulModalVisible, setIsSuccessfulModalVisible] = useState(false);
  const [isFailedModalVisible, setIsFailedModalVisible] = useState(false);

  useEffect(() => {
    const id = params.recipeId;
    axios
      .get(`/recipe/${id}`)
      .then(({ data }) => {
        setRecipe(data);
      })
      .catch((err) => console.error(err));

    axios
      .get(`/recipe/relatedTo/${id}`)
      .then(({ data }) => {
        setRelatedRecipes(data);
      })
      .catch((err) => console.error(err));
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
      .then(({ data }) => {
        if (data === 'Successfully added to MyRecipes') {
          setIsSuccessfulModalVisible(true) 
        } else {
          setIsFailedModalVisible(true)
        }
      })
      .catch((err) => console.error(err));
  };

  const handleSuccessfulOk = () => {
    setIsSuccessfulModalVisible(false);
  };

  const handleSuccessfulCancel = () => {
    setIsSuccessfulModalVisible(false);
  };

  const handleFailedOk = () => {
    setIsFailedModalVisible(false);
  };

  const handleFailedCancel = () => {
    setIsFailedModalVisible(false);
  };

  const { TabPane } = Tabs;
  
  return (
    <>
      {recipe ? (
        <div>
          <div className="recipe__container">
            <Card className="recipe__img-ingredients-container" loading={recipe ? false : true}>
              <img src={recipe.image ? recipe.image : 'http://via.placeholder.com/556x370.png?text=No+Image+Available'} alt={recipe.title} />
              <div dangerouslySetInnerHTML={{__html: removeLastSentence(recipe.summary)}}/>
              <div className='recipe__servings-time-container'>
                <p className='recipe__servings'>Servings: {recipe.servings}</p>
                <p className='recipe__time'>Ready in {calculateTime(recipe.readyInMinutes)}</p>
              </div>
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
                          <Button htmlType="submit" shape="circle" size='small' className='recipe__ingredient-add-button'>
                            {<PlusOutlined />}
                          </Button>
                          </Popover>
                        </form>
                      </Timeline>
                    );
                  })}
                </TabPane>
                <TabPane tab="Directions" key="2">
                  {recipe.analyzedInstructions[0] &&
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
            <h2 className='related-recipes__header'>Similar Recipes</h2>
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
        <Space size='large'>
          <Spin size='large' tip='Loading...' className='loading-message'/>
        </Space>
      )}
      <Modal title='Success!' visible={isSuccessfulModalVisible} onOk={handleSuccessfulOk} onCancel={handleSuccessfulCancel}>
      <p>This recipe has been added to myKitchen Recipes</p>
      </Modal>
      <Modal title='Recipe not added' visible={isFailedModalVisible} onOk={handleFailedOk} onCancel={handleFailedCancel}>
      <p>This recipe has already been added to myKitchen Recipes</p>
      </Modal>
    </>
  );
}

export default ActiveRecipe;
