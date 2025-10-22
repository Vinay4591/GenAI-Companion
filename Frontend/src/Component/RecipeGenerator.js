import React, {useState} from 'react';

function RecipeGenrator(){
    const [ingredients, setIngredients] = useState("");
    const [cuisine, setCuisine] = useState("");
    const [dietaryRestrications, setDietaryRestrictions] = useState("");
    const [recipe, setRecipe] = useState("");

    const generateRecipe = async() => {
        try{
            const response = await fetch(`http://localhost:8080/recipe-generator?ingredients=${ingredients}&cuisine=${cuisine}&dietaryRestrictions=${dietaryRestrications}`);
            const data = await response.text();
            console.log("Generated recipe:", data);
            setRecipe(data);
        }
        catch(err){
            console.error("Error generating recipe:", err);
        }
    }
    return(
        <div>
            <h2>Recipe Generator</h2>
            <input 
                type="text"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                placeholder='Enter Ingredients...'
            />
            <input 
                type="text"
                value={cuisine}
                onChange={(e) => setCuisine(e.target.value)}
                placeholder='Enter cuisine...'
            />
            <input 
                type="text"
                value={dietaryRestrications}
                onChange={(e) => setDietaryRestrictions(e.target.value)}
                placeholder='Enter dietaryRestrications...'
            />
            <button onClick={generateRecipe}>Generate Recipe</button>
            <div className="output">
                <pre className='recipe-text'>
                    <p>{recipe}</p>
                </pre>
            </div>
        </div>
    )
}

export default RecipeGenrator;