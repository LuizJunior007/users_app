import { Navbar, Container, Nav } from "react-bootstrap";
import { siteName } from "../../config";
import { Link } from "react-router-dom";

const NavbarMenu = () => {

    return(
        <header>

            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Link to='/' className="navbar-brand">
                        { siteName }
                    </Link>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">Tema</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </header>
    );

}

export default NavbarMenu;