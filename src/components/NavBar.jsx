import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  Button,
  FormControl,
} from "react-bootstrap"

import "../styles/navBar.css"
import { NavLink } from "react-router-dom"

const NavBar = function () {
  return (
    <>
      <Navbar
        expand="lg"
        bg="black"
        variant="dark"
        className="navColor sticky-top"
      >
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <img
              src="/mod.jpg"
              width="80"
              height="60"
              className="d-inline-block align-middle"
              alt="Sneaky Workout"
            />
            <span className="ms-5 navLogoText">Sneaky Workout</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* Barra di ricerca */}
            <Form className="d-flex mx-auto" style={{ maxWidth: "300px" }}>
              <Form.Control
                type="search"
                placeholder="Cerca"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-danger">Cerca</Button>
            </Form>

            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/home">
                home
              </Nav.Link>
              <Nav.Link href="/contatti">Contatti</Nav.Link>
              <Nav.Link href="/prodotti">Prodotti</Nav.Link>
              <NavDropdown title="Altro" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar
