import { useEffect } from 'react';
import axios from 'axios';

function RecipesList({ match: { params }}) {

    useEffect(() => {
        console.log(params.search)
        axios
            .get(`http://localhost:8080/recipes/${params.search}`)
            .then(({ data }) => console.log(data))
    })

    return (
        <h1>Search Results</h1>
    )
}

export default RecipesList;