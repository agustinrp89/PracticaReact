import React from "react";
import {Link} from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AuthContext from "../context/AuthContext";


function Menu(props){
    return (

        <Container>
            <AuthContext.Consumer>
                    {
                        context=>
                        <Navbar bg="light" expand="lg">
                            <Navbar.Brand href="#home">React2022</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                                <Nav.Link as={Link} to="/">Homepage</Nav.Link>
                                        {
                                            !context.isLogin &&
                                                <>
                                                <Nav.Link as={Link} to="/ingresar">Ingresar</Nav.Link>
                                                <Nav.Link as={Link} to="/alta">Registro</Nav.Link>
                                                </>
                                        }
                                        {
                                            context.isLogin &&
                                                <>
                                                <Nav.Link onClick={context.logoutUser}>Salir</Nav.Link>                                                
                                                </>
                                        }
                                                                
                                </Nav>
                            </Navbar.Collapse>
                            {
                             
                                context.isLogin &&
                                <div> Hola {context.userInfo.name}</div>
                               
                            }
                        </Navbar>

                    }
            </AuthContext.Consumer>
        </Container>
        

    )

}

export default Menu