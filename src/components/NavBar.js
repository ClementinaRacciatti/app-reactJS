import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget/CartWidget";
import "./CartWidget/CartWidget.css"

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                By Marga
                </Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link as={Link} to='/'>Home</Nav.Link>
                <Nav.Link as={Link} to='/category/pulceras'>Pulceras</Nav.Link>
                <Nav.Link as={Link} to='/category/anillos'>Anillos</Nav.Link>
                <Nav.Link as={Link} to='/category/aros'>Aros</Nav.Link>
                <Nav.Link as={Link} to='/category/contacto'>Contacto</Nav.Link>
                </Nav>
                <CartWidget/>
            </Container>
        </Navbar>
    )
}

export default NavBar;
