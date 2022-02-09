import React from "react";

function RecipeView({ recipe, deleteRecipe }) {
  return (
    <tr>
      <td>
        <p>{recipe.name}</p>
      </td>
      <td>
        <p>{recipe.cuisine}</p>
      </td>
      <td>
        <p>{recipe.photo}</p>
      </td>
      <td className="content_td">
        <p>{recipe.ingredients}</p>
      </td>
      <td className="content_td">
        <p>{recipe.preparation}</p>
      </td>
      <button name="delete" onClick={deleteRecipe}>
        Delete
      </button>
    </tr>
  );
}

export default RecipeView;
