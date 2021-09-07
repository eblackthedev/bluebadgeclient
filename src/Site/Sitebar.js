import React, {useState} from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, Collapse, NavbarToggler,Button} from 'reactstrap';


const Sitebar = (props) => { //sitebar is a component
const [isOpen, setIsOpen] = useState(false);
const toggle = () => {
    let newIsOpen = !isOpen;
    setIsOpen(newIsOpen)
}

    return (
        <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Games</NavbarBrand>
        <NavbarToggler onClick={toggle}/>
        <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem>
                <Button onClick={props.clickLogout}>Logout</Button>
                

            </NavItem>
            </Nav>
        </Collapse>
        </Navbar>
    )
}

export default Sitebar;