import React from 'react';
import { Card, CardActions, CardContent,Typography } from '@material-ui/core/';
import {NavLink} from "react-router-dom"
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import useStyles from './style';
import axios from "axios"
const Post = ({ username,description,duration,date,id ,delateFun}) => {
  const classes = useStyles();
 
const delt=()=>{
  axios.delete(`http://localhost:5000/exercise/delete/${id}`).then(data=>{console.log("success")}).catch(e=>console.log(e));
  
delateFun();
}

  return (
    <div className="col col-xs-12 col-sm-12 col-md-6 col -lg-3 col-xl-3 mb-3">
    <Card className={classes.card}>
   
  
    
      <Typography className={`${classes.title} textcolorw`} gutterBottom variant="h5" component="h2">{username}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
      </CardContent>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">{duration}</Typography>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">{date}</Typography>
      </div>
      <CardActions className={classes.cardActions}>
       <p className="navbtn" onClick={delt}><DeleteIcon fontSize="small" /> Delete</p>
            <NavLink className="navbtn" to={`/editExercise/${id}`}><EditIcon  fontSize="small" /> Edit</NavLink>

      </CardActions>
    </Card></div>
  );
};

export default Post;