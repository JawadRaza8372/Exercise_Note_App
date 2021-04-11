import React from 'react'
import {Navbar,Nav} from "react-bootstrap"
import {NavLink} from "react-router-dom"
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
function NavBarRes() {
    return (
        <>       <Navbar className="border"  bg="light" expand="lg">
        <Navbar.Brand href="/"><h5 className="textcolorw"><DirectionsRunIcon style={{fontSize:"30px"}}/>Exercise Tracker App</h5></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink exact={true} className="navbtn" activeClassName="activeNavbtn" to="/"><AccessibilityNewIcon/>Exercises</NavLink>
            <NavLink exact={true}  className="navbtn" activeClassName="activeNavbtn"  to="/user"><PersonAddIcon/>User</NavLink>
            <NavLink exact={true}  className="navbtn" activeClassName="activeNavbtn"  to="/create"><AddCircleIcon/>Add Exercise</NavLink>

          </Nav>
        </Navbar.Collapse>
      </Navbar></>
 
    )
}

export default NavBarRes
