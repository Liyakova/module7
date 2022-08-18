import React from "react"

function RecipeResult({recipeName, recipeCalories, recipePhoto, recipeIngredients}) {
    return(
        <div className="recipe">
            <h2>{recipeName}</h2>
            <img src={recipePhoto} alt="food" width="250px"/>
            <h3>{recipeCalories.toFixed()} calories</h3>
            <ul>
                {recipeIngredients.map((product, i) =>(
                    <li key={i}>{product}</li>
                ))}
            </ul>             
        </div>
    )
}

export default RecipeResult;