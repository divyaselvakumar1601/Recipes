const recipesmodel=require("./recipes.model");


async function getAllRecipes(req,res,next){
  try{
    const result=await recipesmodel.find();
    res.status(200).json({
    message:"recipes get successfully",
    success:true,
    result
  })
 } catch (error) {
   res.status(200).json({
    message:"error on fetching recipes",
   success:false,
  error:error.message
  })
 }
}

async function createArecipes(req,res,next) {
  try{
    const recipes=new recipesmodel(req.body);
    const result= await recipes.save();  
    return res.status(201).json({
      message:"recipe created succefully",
      success:true,
      result
    })  
 
  }
  catch{
  return res.status(500).json({
    message:"errer on creating recipes",
    success:false
  })
  }
}


async function getRecipeById(req,res,next){
  try{
    const result=await recipesmodel.findById(req.params.id);
    if (!result) {
      return res.status(404).json({
        message: "Recipe not found",
        success: false
      });
    }

    res.status(200).json({
      message: "Recipe fetched successfully",
      success: true,
      result
    });

  } catch (error) {
    res.status(500).json({
      message: "Error fetching recipe",
      success: false,
      error: error.message
    });
 }
}


async function updateRecipe(req,res,next){
  try{
    const result= await recipesmodel.findByIdAndUpdate(req.params.id,req.body, { new: true, runValidators: true } );
    // returns updated doc & runs validation 
    if (!result) {
      return res.status(404).json({
        message: "Recipe not updated",
        success: false
      });
    }

    res.status(200).json({
      message: "Recipe updated successfully",
      success: true,
      result
    });

  } catch (error) {
    res.status(500).json({
      message: "Error on updating recipe",
      success: false,
      error: error.message
    });
 }
}

async function deleteRecipe(req,res,next){
  try{
    const result= await recipesmodel.findByIdAndDelete(req.params.id,req.body, { new: true, runValidators: true } );
    // returns updated doc & runs validation 
    if (!result) {
      return res.status(404).json({
        message: "Recipe not deleted",
        success: false
      });
    }

    res.status(200).json({
      message: "Recipe deleted successfully",
      success: true,
      result
    });

  } catch (error) {
    res.status(500).json({
      message: "Error on deleting recipe",
      success: false,
      error: error.message
    });
 }
}




module.exports={
  getAllRecipes,
  createArecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe
}