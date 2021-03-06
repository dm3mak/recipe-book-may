
import React, { Component } from 'react'
import { Col, Form, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            pwd:''
        }
    }
    updatePass = (event)=>{
        this.setState({
           pwd: event.target.value
        })
    }
    updateEmail = (event)=>{
        this.setState({
            email: event.target.value
        })
    } 
    handleLogin = () => {
        // Checked the typed username and password from the controlled components
        // Check if user exists in this.props.allUsers, and if the password is correct
        // if true return the user object
        // if false - show alert - password/ used not found
        const foundUser = this.props.allUsers.find( (user) => {
            if(user.email == this.state.email && user.pwd == this.state.pwd){
                return true
            }
        });
        if(foundUser){
            this.props.login(foundUser);
            window.location.href = '/#/recipes';
        }
        else{
            alert("Email or Password incorrect")
        } 
    }
    render() {
        return (
            <div className = "p-login">
                <h1>Login to My Recipe Book</h1>
                <Form className = " mt-5">
                <Form.Group as={Row} controlId="formHorizontalEmail" >
                    <Form.Label column sm={2}>
                    Email
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="email" placeholder="Email" onChange={this.updateEmail} value = {this.state.email}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                    Password
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="password" placeholder="Password" onChange={this.updatePass} value = {this.state.password} />
                    </Col>
                </Form.Group>
                <Form.Group className = " mt-2"as={Row}>
                    <Col sm={{ span: 10, offset: 2 }}>
                    <Button onClick={this.handleLogin} variant = "success"type="button">Log in</Button>
                    </Col>
                </Form.Group>
                </Form>
                <Link to = "/signup">Sign Up</Link>
            </div>
        )
    }
}
