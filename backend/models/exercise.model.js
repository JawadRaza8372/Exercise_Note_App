const mongoose=require('mongoose');
const exerciseSchema=new mongoose.Schema({
    username:{
        type:String,required:true,minlength:5,
    }, description:{
        type:String,required:true,minlength:5,
        
    }, duration:{
        type:Number,required:true
    },date:{
        type:Date,required:true
    }
},{
    timestamps:true
});
const exercise=new mongoose.model("exercise",exerciseSchema);
module.exports=exercise;