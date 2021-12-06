import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import ListedRecipe from '../../components/ListedRecipe';

import { calculateTime } from '../../utils/helpers';

import { Card, Button } from 'antd';
import { PlusOutlined } from "@ant-design/icons";
import './Home.scss';

const { Meta } = Card;


function Home() {

    const [featuredRecipes, setFeaturedRecipes] = useState(null);

    useEffect(() => {
        axios
            .get(`/random`)
            .then(({ data: { recipes }}) => {
                console.log(recipes)
                setFeaturedRecipes(recipes)
            })
            .catch((err) => console.error(err))
    }, [])

    const handleAddToFavourites = () => {
        const recipeBody = {
            id: featuredRecipes[0].id,
            user_id: 1,
            summary: featuredRecipes[0].summary.substr(0, 1200),
            title: featuredRecipes[0].title,
            image: featuredRecipes[0].image ? featuredRecipes[0].image : 'http://via.placeholder.com/556x370.png?text=No+Image+Available',
            analyzedInstructions: JSON.stringify(featuredRecipes[0].analyzedInstructions),
            cuisines: JSON.stringify(featuredRecipes[0].cuisines),
            dairyFree: featuredRecipes[0].dairyFree,
            diets: JSON.stringify(featuredRecipes[0].diets),
            dishTypes: JSON.stringify(featuredRecipes[0].dishTypes),
            extendedIngredients: JSON.stringify(featuredRecipes[0].extendedIngredients),
            glutenFree: featuredRecipes[0].glutenFree,
            servings: featuredRecipes[0].servings,
            readyInMinutes: featuredRecipes[0].readyInMinutes,
            vegan: featuredRecipes[0].vegan,
            vegetarian: featuredRecipes[0].vegetarian
        }
        axios
            .post('/myrecipes', (recipeBody))
            .then(({data}) => console.log(`Added recipe to MyFavourites: ${data}`))
            .catch((err) => console.error(err))
    }

        return (
            <>
            <div className='home-page__container'>
                <div className='home-page__home'>
                    <h1 className='home-page__header'>KitchenCompanion Customizable Cookbook</h1>
                    <p className='home-page__description'>helps you find countless recipe ideas based on ingredients you have on hand to put an end to the dreaded question of "What should I make for dinner?"</p>
                </div>
                <div className='featured-recipe__container'>
                <h1 className='featured-recipe__header'>Featured recipe</h1>
                {featuredRecipes ?
                <Link to={`/recipe/${featuredRecipes[0].id}`}>
                    <Card hoverable cover={<img src={featuredRecipes[0].image ? featuredRecipes[0].image : 'http://via.placeholder.com/556x370.png?text=No+Image+Available'} alt={featuredRecipes[0].title} />} className='featured-recipe'>
                        <Meta title={featuredRecipes[0].title} description={`Serves ${featuredRecipes[0].servings}, ready in ${calculateTime(featuredRecipes[0].readyInMinutes)}`}/>
                    </Card>
                </Link>
                : <p>Loading...</p>
                }                
                <Button className='featured-recipe__add-button' onClick={handleAddToFavourites} shape='round'>
              {<PlusOutlined />} Add to MyRecipes
            </Button>
                </div>
                </div>
                <div className='other-recipes__container'>
            <h2 className='other-recipes__header'>Other Recipes</h2>
            <ul className='other-recipes__list'>
            {featuredRecipes &&
              featuredRecipes.map((recipe) => {
                  if (recipe.id !== featuredRecipes[0].id)
                return <ListedRecipe key={recipe.id} recipe={recipe} />;
              })}
            </ul>
            </div>
            
            </>
        )
}

export default Home;