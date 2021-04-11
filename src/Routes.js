import React from 'react'
import {Route} from "react-router-dom"
import ExerciseList from "./Componenets/ExerciseList"
import EditExercise from "./Componenets/EditExercise"
import CreateExercise from "./Componenets/CreateExercise"
import CreateUser from "./Componenets/CreateUser"

function Routes() {
    return (
        <>
            <Route exact={true} path="/" component={ExerciseList}/>
            <Route exact={true} path="/editExercise/:id" component={EditExercise}/>
            <Route exact={true}  path="/create" component={CreateExercise}/>
            <Route exact={true} path="/user" component={CreateUser}/>

        </>
    )
}

export default Routes
