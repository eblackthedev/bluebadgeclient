import React, {useState} from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, Collapse, NavbarToggler,Button} from 'reactstrap';
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
        <NavbarBrand href="/">Games</NavbarBrand>
        <NavbarToggler onClick={toggle}/>
        <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
         
            <NavItem class="navgame">
            <Button><Link to='/home'>Games</Link></Button>
            </NavItem>
        

            <NavItem class="navaddgame">
            <Button> <Link to='/create'>Add Games</Link></Button>
            </NavItem>

            <NavItem class="navmyprofile">
            <Button> <Link to='/home'>My Profile</Link></Button>
            </NavItem>
            
            <NavItem class="navlogout">
            <Button onClick={props.clickLogout}>Logout</Button>

            </NavItem>
           

            </Nav>
            </Collapse>
            </Navbar>
            
        </>
    )
}

export default Sitebar;