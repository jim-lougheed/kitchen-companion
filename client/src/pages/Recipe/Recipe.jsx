import React from "react";
import { useParams } from 'react-router-dom';

import RecipePage from "../RecipePage/RecipePage";


function Recipe (props) {
    

    const params = useParams();
    

        return (
            <>
                <h1>Recipe</h1>
                <RecipePage params={params} />
            </>
        )

}

export default Recipe;