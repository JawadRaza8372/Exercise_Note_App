const Router=require("express").Router();
const userModel=require("../models/user.model");
Router.route("/").get((req,res,next)=>{
    userModel.find().then(data=>res.json(data)).catch(e=>res.status(400).json("Error: "+e))
});

Router.route("/add").post((req,res,next)=>{
    const name=req.body.name;
    const newUser=new userModel({name});
    newUser.save().then(()=>res.json("user added")).catch(e=>res.status(400).send("Error: "+e))
})
module.exports=Router;