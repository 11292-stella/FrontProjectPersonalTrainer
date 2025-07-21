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
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { logoutUser } from "../redux/action/authActions"
import { FaSignOutAlt } from "react-icons/fa"
import { useSelector } from "react-redux"
import IconaCarrello from "./IconaCarrello"

const NavBar = function () {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logoutUser())
    navigate("/home")
  }
  const token = useSelector((state) => state.authLog.token)
  const isLoggedIn = useSelector((state) => state.authLog.isLoggedIn)

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
            <Nav className="ms-auto flex-column flex-lg-row align-items-lg-center">
              <Nav.Link as={NavLink} to="/home">
                Home
              </Nav.Link>

              {isLoggedIn && (
                <Nav.Link as={NavLink} to="/crea-scheda">
                  Crea scheda
                </Nav.Link>
              )}

              {isLoggedIn && <Nav.Link href="/prodotti">Prodotti</Nav.Link>}

              {isLoggedIn && (
                <div className="d-flex justify-content-start w-lg-auto mt-2 mt-lg-0 ms-lg-3">
                  <IconaCarrello />
                </div>
              )}

              {/* Logout visibile solo se loggato */}
              {isLoggedIn && (
                <Nav.Link
                  onClick={handleLogout}
                  style={{ cursor: "pointer" }}
                  title="Esci"
                  className="mt-2 mt-lg-0 d-flex align-items-center ms-lg-3"
                >
                  <FaSignOutAlt size={20} color="white" />
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar
