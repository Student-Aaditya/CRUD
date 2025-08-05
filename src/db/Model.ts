import mongoose from "mongoose"

const UserScehema=new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    mobile:{
        type:String,
    },
    data:{
        type:String,
    }
    
},{
        timestamps:true,
    })

export const User=mongoose.model("User",UserScehema);
