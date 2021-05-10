import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap'

export default class RecipesNavbar extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/#/">My Recipe Book</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/#/recipes">recipes</Nav.Link>
                        <Nav.Link href="/#/login">Login</Nav.Link>
                        <Nav.Link href="/#/signup">Signups</Nav.Link>    
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            )
        }
    }
    
    