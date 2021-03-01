import React, {Fragment} from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import Image from "react-bootstrap/Image";

const Header = () => (
    <Navbar expand="lg">
        <Navbar.Brand href="#home">
            <Image src="/logo.svg" fluid />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#home">HOME</Nav.Link>
                <Nav.Link href="#link">LIFE STYLE</Nav.Link>
                <Nav.Link href="#link">TRAVEL</Nav.Link>
                <Nav.Link href="#link">FASHION</Nav.Link>
                <Nav.Link href="#link">CONTACT</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                <Button variant="outline-success">Search</Button>
            </Form>
        </Navbar.Collapse>
    </Navbar>
)

export default Header;