import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import propTypes from 'prop-types'

export default function Topnav(props) {
  return (
    <>
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="/">{props.title}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </>
  )
}

Topnav.propTypes = {title: propTypes.string.isRequired} // To define any particular prop type and is Required makes it compulsory
// Topnav.defaultProps = { // If prop is geting passed then set a default val
//   title: 'Set title here'
// }