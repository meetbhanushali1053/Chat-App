const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        requires:true,
        min:3,
        max:20,
        unique:true,
    },
    email:{
        type:String,
        requires:true,
        max:50,
        unique:true,
    },
    password:{
        type:String,
        requires:true,
        min:8
    },
    avatarImage:{
        type:String,
        default:"",
    },
})

module.exports=mongoose.model("Users",userSchema);