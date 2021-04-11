const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
require('dotenv').config();
const exerciseRoute=require("./routes/exercise");
const userRoute=require("./routes/user");

const app=express();
const port=process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


//lets connect to atlas
const uri=process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology: true});
const connection=mongoose.connection;
connection.once('open',()=>{
    console.log("mongodb connection is successfull");
})


app.use("/exercise",exerciseRoute);
app.use("/user",userRoute);

app.listen(port,()=>{
    console.log(`server started at http://localhost:${port}`);
});
