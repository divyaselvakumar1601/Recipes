const Mongoose=require('mongoose');

//1.create schema- how ur data looks like
const RecipesSchema=  Mongoose.Schema({
   title: { type: String, required: [true, 'title is required']},
   ingredients: {type:String,required:[true, 'Ingredients are required']},
   instructions: { type: String, required: [true , 'Instructions are required']},
   category:{type:String,enum:['Breakfast','Lunch','Dinner','Snack','Dessert'],default:'Lunch'},
   createdAt: { type: Date, default: Date.now },
   
},{timestamps:true})



//2.create modek-what you can perform with the schema

const recipesmodel=Mongoose.model('recipes',RecipesSchema);

module.exports=recipesmodel;