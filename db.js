const mongoose=require('mongoose');

const CONNECTION_URI=`mongodb+srv://divyaselvakumar01:Divya1601@zenclass.1bxul0o.mongodb.net/recipes`;



(()=> {mongoose.connect(CONNECTION_URI).then((result)=>{
    if(result){
        console.log("mongodb connection successfull");
    }
}).catch((error)=>{
    console.log(error);
})
})();
