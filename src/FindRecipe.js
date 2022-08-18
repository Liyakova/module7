import React from "react";
import { useState, useEffect } from "react";
import RecipeResult from "./RecipeResult";

function FindRecipe() {

    const MY_ID = "2757ac0f";
    const MY_KEY = "07e91946b762ce139892f84f32125c4a";

    const [search, setSearch] = useState("");
    const [myRecipe, setMyResipe] = useState([]);
    const [wordSubmittes, setWordSubmittes] = useState("avocado");

    useEffect(()=> {
        const getRecipe = async () => {
            const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmittes}&app_id=${MY_ID}&app_key=${MY_KEY}`);
            const result = await response.json();
            setMyResipe(result.hits);
            console.log(result.hits)
        };
        getRecipe();
    }, [wordSubmittes])

    const MyRecipeSearch = (e) => {
        setSearch(e.target.value)
    }

    const finalSearch = (e) => {
        e.preventDefault();
        setWordSubmittes(search);
    }


    return(
        <div>
            <div>
                <form onSubmit={finalSearch}>
                    <input placeholder="Search..." onChange={MyRecipeSearch} value={search}/>
                    <button>search</button>
                </form>
            </div>

            <div>
                {myRecipe.map(element =>(
                    <RecipeResult 
                            recipeName={element.recipe.label}
                            recipeCalories={element.recipe.calories} 
                            recipePhoto={element.recipe.image}
                            recipeIngredients={element.recipe.ingredientLines}
                            />
                        ))}
            </div> 
        </div>

    )
}

export default FindRecipe;