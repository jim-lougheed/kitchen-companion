import React from "react";
import axios from "axios";

class RecipePage extends React.Component {
    state = {
        activeRecipe: null
    }

    componentDidMount() {
        console.log(this.props.params.recipeId)
        const id = this.props.params.recipeId;
        axios.get(`https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=6827e83d&app_key=e8ba68fc65d76f6587a33cd755a94d28`)
        .then((response) => {
            this.setState({
                activeRecipe: response.data.recipe
            })            
        })
    }

    render() {
        { if (!this.state.activeRecipe) {
            return <h1> Loading... </h1>
        } else {
        return (
            <>
                <h1>RecipePage</h1>
                <p>{this.state.activeRecipe.label}</p>
                <img src={this.state.activeRecipe.image} />
            </>
        )
        }
    }}
}

export default RecipePage;