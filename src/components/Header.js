import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import Image from "react-bootstrap/Image";

const Header = (props) => {
    const {location} = props;

    return (
        <Navbar expand="lg">
            <Navbar.Brand href="/">
                <Image src="/logo.svg" fluid/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav" className="offset-md-2">
                <Nav activeKey={location.pathname} className="mr-auto">
                    <Nav.Link href="/">HOME</Nav.Link>
                    <Nav.Link href="/category/lifestyle">LIFE STYLE</Nav.Link>
                    <Nav.Link href="/category/travel">TRAVEL</Nav.Link>
                    <Nav.Link href="/category/fashion">FASHION</Nav.Link>
                    <Nav.Link href="/contact">CONTACT</Nav.Link>
                </Nav>
                <div className="search-form">
                    <i className="fas fa-search"></i>
                </div>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;