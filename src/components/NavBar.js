import { Container, Nav, Navbar } from "react-bootstrap";
import CartWidget from "./CartWidget";
import "./CartWidget.css"

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                By Marga
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#collares">Collares</Nav.Link>
                    <Nav.Link href="#anillos">Anillos</Nav.Link>
                    <Nav.Link href="#aros">Aros</Nav.Link>
                    <Nav.Link href="#contacto">Contacto</Nav.Link>
                </Nav>
                <CartWidget/>
            </Container>
        </Navbar>
    )
}

export default NavBar;
