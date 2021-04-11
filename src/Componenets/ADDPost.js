import React from 'react';
import {Card, CardContent,Typography } from '@material-ui/core/';
import useStyles from './style';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {NavLink} from "react-router-dom"
const ADDPost = () => {
  const classes = useStyles();

  return (
    <NavLink className="col col-xs-12 col-sm-12 col-md-6 col -lg-3 col-xl-3" to="/create">
    <Card className={classes.card}>
    <div className="p-3" >

    <CardContent>
    <center>
        <AddCircleIcon className="textcolorw" style={{fontSize:"120px"}}/>
        <Typography className={`${classes.title} textcolorw`} gutterBottom variant="h5" component="h2">Add Exercise</Typography>

        </center>
      </CardContent>
      </div>
     
    </Card></NavLink>
  );
};

export default ADDPost;