import express from "express"
import mongoose from "mongoose"
import router from "./routes";
import path from "path";
import methodoverride from "method-override";

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(methodoverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));

const Mongo_Url="mongodb://127.0.0.1:27017/crudts";
mongoose.connect(Mongo_Url,{
    dbName:"Mongo"
})
.then(()=>{
    console.log("mongo connected successful");
}).catch((err)=>{
    console.log(err);
})

app.use("/",router);

app.listen(4000,()=>{
    console.log("Server working on 4000");
})