const recipesrouter=require("express").Router();


const{getAllRecipes,createArecipes, getRecipeById,updateRecipe,deleteRecipe}=require("./recipes.services")

recipesrouter.get("/",getAllRecipes);
recipesrouter.post("/create",createArecipes);

recipesrouter.get("/:id", getRecipeById);
recipesrouter.put("/:id", updateRecipe);
recipesrouter.delete("/:id", deleteRecipe);









module.exports=recipesrouter;