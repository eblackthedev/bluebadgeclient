import React, {useState} from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavbarText, NavLink,Collapse, NavbarToggler,Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

//import GameEdit from './GameEdit';

const Sitebar = (props) => { //sitebar is a component
const [isOpen, setIsOpen] = useState(false);
const toggle = () => {
    let newIsOpen = !isOpen;
    setIsOpen(newIsOpen)
}

    return (<>
        <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Bluebadge</NavbarBrand>
        <NavbarToggler onClick={toggle}/>
        <Collapse isOpen={isOpen} navbar className="justify-content-end">
            <Nav className="mr-auto " navbar   >
         
            <NavItem class="navgame">
            <NavLink href='/home'>Games</NavLink>
            </NavItem>
        

            <NavItem class="navaddgame">
            <NavLink href='/create'>Add Games</NavLink>
            </NavItem>

            <NavItem class="navmyprofile">
           <NavLink href='/home'>My Profile</NavLink>
            </NavItem>
            
            
           

            </Nav>
            
            <Button style={{marginRight:10}} onClick={props.clickLogout}>Logout</Button>
          
            </Collapse>
            </Navbar>
            
        </>
    )
}

export default Sitebar;