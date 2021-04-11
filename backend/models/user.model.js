const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    name:{
        type:String,required:true,minlength:5,
    }
},{
    timestamps:true
});
const user=new mongoose.model("user",userSchema);
module.exports=user;