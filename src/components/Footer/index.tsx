import { Navbar, Nav } from "react-bootstrap";

const Footer = () => {

    return(
        <footer>
            <div>
                Desenvolvido por L. Junior
            </div>

            <Navbar>

                <Navbar.Toggle aria-controls="footer-nav" />

                <Navbar.Collapse id="footer-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="https://www.linkedin.com/in/luiz-junior-503969227/" target="_blank">
                            <i className="bi bi-linkedin"></i>
                        </Nav.Link>

                        <Nav.Link href="https://github.com/LuizJunior007" target="_blank">
                            <i className="bi bi-github"></i>
                        </Nav.Link>      
                    </Nav>
                </Navbar.Collapse>
                
            </Navbar>
        </footer>
    );

}

export default Footer;