import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import ListedRecipe from "../../components/ListedRecipe";

import { calculateTime } from "../../utils/helpers";

import { Card, Button, Spin, Space, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Logo from "../../assets/logos/tallLogo.jpg";
import "./Home.scss";

const { Meta } = Card;

function Home() {
  const [featuredRecipes, setFeaturedRecipes] = useState(null);
  const [isSuccessfulModalVisible, setIsSuccessfulModalVisible] = useState(false);
  const [isFailedModalVisible, setIsFailedModalVisible] = useState(false);

  useEffect(() => {
    axios
      .get(`/random`)
      .then(({ data: { recipes } }) => {
        setFeaturedRecipes(recipes);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleAddToFavourites = () => {
    const recipeBody = {
      id: featuredRecipes[0].id,
      user_id: 1,
      summary: featuredRecipes[0].summary.substr(0, 1200),
      title: featuredRecipes[0].title,
      image: featuredRecipes[0].image
        ? featuredRecipes[0].image
        : "http://via.placeholder.com/556x370.png?text=No+Image+Available",
      analyzedInstructions: JSON.stringify(
        featuredRecipes[0].analyzedInstructions
      ),
      cuisines: JSON.stringify(featuredRecipes[0].cuisines),
      dairyFree: featuredRecipes[0].dairyFree,
      diets: JSON.stringify(featuredRecipes[0].diets),
      dishTypes: JSON.stringify(featuredRecipes[0].dishTypes),
      extendedIngredients: JSON.stringify(
        featuredRecipes[0].extendedIngredients
      ),
      glutenFree: featuredRecipes[0].glutenFree,
      servings: featuredRecipes[0].servings,
      readyInMinutes: featuredRecipes[0].readyInMinutes,
      vegan: featuredRecipes[0].vegan,
      vegetarian: featuredRecipes[0].vegetarian,
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

  return (
    <>
      <div className="home-page__container">
        <div className="home-page__home">
          <img
            className="home-page__logo"
            src={Logo}
            alt="KitchenCompanion logo"
          ></img>
          <h1 className="home-page__header">
            KitchenCompanion
          </h1>
          <h2 className="home-page__subheader">
            Customizable Cookbook
          </h2>
          <p className="home-page__description">
            helps you find countless recipe ideas based on ingredients you have
            on hand to put an end to the dreaded question of "What am I going to make
            for dinner?"
          </p>
          <div className='home-page__dinner-wheel'>
          <p className='home-page__dinner-wheel-text'>Try the KitchenCompanion Dinner Wheel!</p>
          <p className='home-page__dinner-wheel-text'>Just select the ingredients you currently have in the "What's in myKitchen?" checklist and</p>
          <Link to='/recipes/search'>
          <Button shape="round" className='home-page__dinner-wheel-button'>
            Click Here!
          </Button>        
          </Link>
          </div>
          </div>
        <div className="featured-recipe__container">
          <h1 className="featured-recipe__header">Featured recipe</h1>
          {featuredRecipes ? (
            <Link to={`/recipe/${featuredRecipes[0].id}`}>
              <Card
                hoverable
                cover={
                  <img
                    src={
                      featuredRecipes[0].image
                        ? featuredRecipes[0].image
                        : "http://via.placeholder.com/300x200.png?text=No+Image+Available"
                    }
                    alt={featuredRecipes[0].title}
                  />
                }
                className="featured-recipe"
              >
                <Meta
                  title={featuredRecipes[0].title}
                  description={`Serves ${
                    featuredRecipes[0].servings
                  }, ready in ${calculateTime(
                    featuredRecipes[0].readyInMinutes
                  )}`}
                />
              </Card>
            </Link>
          ) : (
            <Space size='large'>
          <Spin size='large' tip='Loading...' className='loading-message'/>
        </Space>          )}
          <Button
            className="featured-recipe__add-button"
            onClick={handleAddToFavourites}
            shape="round"
          >
            {<PlusOutlined />} Add to myKitchen Recipes
          </Button>
        </div>
      </div>
      <div className="other-recipes__container">
        <h2 className="other-recipes__header">More Recipes</h2>
        <ul className="other-recipes__list">
          {featuredRecipes &&
            featuredRecipes.map((recipe) => {
              if (recipe.id !== featuredRecipes[0].id) {
                return <ListedRecipe key={recipe.id} recipe={recipe} />;
              } else {
                return null;
              }
            })}
        </ul>
      </div>
      <Modal title='Success!' visible={isSuccessfulModalVisible} onOk={handleSuccessfulOk} onCancel={handleSuccessfulCancel}>
      <p>This recipe has been added to myKitchen Recipes</p>
      </Modal>
      <Modal title='Recipe not added' visible={isFailedModalVisible} onOk={handleFailedOk} onCancel={handleFailedCancel}>
      <p>This recipe has already been added to myKitchen Recipes</p>
      </Modal>
    </>
  );
}

export default Home;
