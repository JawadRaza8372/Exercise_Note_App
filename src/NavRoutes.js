import React from 'react'
import Routes from './Routes'
import {Switch} from "react-router-dom"
import NavBarRes from './Componenets/NavBarRes'

function NavRoutes() {
    return (<>
        <NavBarRes/>
        <Switch>
        <Routes/>
        </Switch></>
    )
}

export default NavRoutes
