import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap'

export default class RecipesNavbar extends Component {
    constructor(props){
        super(props);
    }
    render() {
        //Show the user managment links conditionally:
        // If activeUser exists, then a user is logged in
        // If activeUser does not exist - Render login + signup
        // If activeUser exists - Rendert signOut
        const loginEl =  (!this.props.activeUser)? <Nav.Link href="/#/login">Login</Nav.Link>: null
        const signupEl = (!this.props.activeUser)?<Nav.Link href="/#/signup">Signup</Nav.Link>: null
        const nameEl = (this.props.activeUser) ? <Nav.Link href="/"> Hello {this.props.activeUser.name}</Nav.Link> : null
        const logoutEl = (this.props.activeUser)?
        <Nav.Link href="/#/" onClick={() => this.props.logout()}>
        Logout
        </Nav.Link>
        : null

        return (
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/#/">My Recipe Book</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/#/recipes">Recipes</Nav.Link>
                </Nav>
                <Nav className="mr-auto">
                    {loginEl}
                    {signupEl}
                    {logoutEl}
                    {nameEl}
                </Nav>
            </Navbar.Collapse>
            </Navbar>
            )
        }
    }
    
    