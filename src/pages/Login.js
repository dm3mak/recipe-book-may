
import React, { Component } from 'react'
import { Col, Form, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Login extends Component {
    render() {
        return (
            <div className = "p-login">
                <h1>Login to My Recipe Book</h1>
                <Form className = " mt-5">
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                    Email
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="email" placeholder="Email" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                    Password
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="password" placeholder="Password" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 2 }}>
                    <Button variant = "success"type="button">Log in</Button>
                    </Col>
                </Form.Group>
                </Form>
                <Link to = "/signup">Sign Up</Link>
            </div>
        )
    }
}
