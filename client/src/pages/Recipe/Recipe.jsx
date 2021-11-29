import React from 'react';
import { useParams } from 'react-router-dom';

import ActiveRecipe from '../../components/ActiveRecipe';


function Recipe() {
    
    const params = useParams();
    
        return (
            <>
                <h1>Recipe</h1>
                <ActiveRecipe params={params} />
            </>
        )
}

export default Recipe;