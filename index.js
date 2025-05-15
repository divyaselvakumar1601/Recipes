//import dependencies
const Express=require("express");
require("./db")

const recipesrouter=require('./modules/recipes/recipes.controller')
const PORT = process.env.PORT || 4000;

//create Http server
const HTTPServer=Express();
//middlewares
HTTPServer.use(Express.json());


//Start ad listem to the incoming requests
HTTPServer.listen(PORT,"0.0.0.0",
    (error)=>{
        if(error){
            console.log("error",error)
        }
        else{
            console.log("server started")
        }
    }
)


//inject routers to server


HTTPServer.use('/recipes',recipesrouter)









