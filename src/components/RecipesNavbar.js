import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap'

export default class RecipesNavbar extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const loginEl =  (!this.props.activeUser)? <Nav.Link href="/#/login">Login</Nav.Link>: null
        const signupEl = (!this.props.activeUser)?<Nav.Link href="/#/signup">Signup</Nav.Link>: null
        const logoutEl = (this.props.activeUser)? <Nav.Link href="/#/" onClick={() => this.props.logout()}>Logout</Nav.Link>: null

        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/#/">My Recipe Book</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/#/recipes">recipes</Nav.Link>
                    </Nav>
                    <Nav className="ml-auto">
                        {loginEl}
                        {signupEl}  
                        {logoutEl}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            )
        }
    }
    
    