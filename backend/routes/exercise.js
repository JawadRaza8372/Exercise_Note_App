const Router=require("express").Router();
const exerciseModel=require("../models/exercise.model");
Router.route("/").get((req,res,next)=>{
    exerciseModel.find().then(data=>res.json(data)).catch(e=>res.status(400).json("Error: "+e))
});

Router.route("/add").post((req,res,next)=>{
    const username=req.body.username;
    const description=req.body.description;
    const duration=req.body.duration;
    const date=new Date().getTime().toString();

    const newExercise=new exerciseModel({username,description,duration,date});
    newExercise.save().then((data)=>res.json("Data added")).catch(e=>res.status(400).json("Error: "+e))
})

Router.route("/find/:id").get((req,res,next)=>{
    exerciseModel.findById(req.params.id).then((data)=>res.json(data)).catch(e=>res.status(400).json("Error: "+e))
})
Router.route("/delete/:id").delete((req,res,next)=>{
    exerciseModel.findByIdAndDelete(req.params.id).then((data)=>res.json("exercise deleted")).catch(e=>res.status(400).json("Error: "+e))
})
Router.route("/update/:id").post((req,res,next)=>{

    exerciseModel.findById(req.params.id).then((data)=>
    {
        data.username,
        data.description=req.body.description;
        data.duration=Number(req.body.duration);
        data.date,
data.save().then(()=>res.json("Data Updated")).catch(e=>res.status(400).json("Error: "+e))
        
    }
    
    ).catch(e=>res.status(400).json("Error: "+e))
})
// Router.route("/add").post((req,res,next)=>{
//     const username=req.body.username;
//     const description=req.body.description;
//     const duration=req.body.duration;
//     const date=new Date().getTime().toString();
//     const newExercise=new exerciseModel({username,description,duration,date});
//     newExercise.save().then((data)=>res.json("Data added")).catch(e=>res.status(400).json("Error: "+e))
// })
module.exports=Router;