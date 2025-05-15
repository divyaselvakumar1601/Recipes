//import dependencies
const Express=require("express");
require("./db")

const recipesrouter=require('./modules/recipes/recipes.controller')


//create Http server
const HTTPServer=Express();
//middlewares
HTTPServer.use(Express.json());


//Start ad listem to the incoming requests
HTTPServer.listen(4000,"localhost",
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









