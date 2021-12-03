import React from 'react';
import { useParams } from 'react-router-dom';

import ActiveRecipe from '../../components/ActiveRecipe';


function Recipe({addToShoppingList}) {
    
    const params = useParams();
    
        return (
            <>
                <ActiveRecipe params={params} addToShoppingList={addToShoppingList}/>
            </>
        )
}

export default Recipe;