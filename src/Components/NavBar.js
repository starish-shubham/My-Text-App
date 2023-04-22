import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Components/Images/logo.png';
import '../index.css';

export default function NavBar(props) {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src ={logo} className = "logo"/>
            <span className ="navtitle">{props.title}</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}
