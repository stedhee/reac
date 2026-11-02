
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Navbarmenu() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><img src="aon.png" alt="..." width={100} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/Menu">menu</Nav.Link>
            <Nav.Link as={Link} to="/food-details">food details</Nav.Link>
            <Nav.Link as={Link} to="/cart">🛒 cart</Nav.Link>
            <Nav.Link as={Link} to="/checkout">checkout</Nav.Link>
            <Nav.Link as={Link} to="/About">about</Nav.Link>
            <Nav.Link as={Link} to="/Contact">contact</Nav.Link>
            <Nav.Link as={Link} to="/Terms">terms and conditions</Nav.Link>
            <Nav.Link as={Link} to="/services">services</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default Navbarmenu;
