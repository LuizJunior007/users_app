import { Navbar, Container, Nav } from "react-bootstrap";
import { siteName } from "../../config";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const NavbarMenu = () => {

    const [ darkTheme, setDarkTheme ] = useState(false); 

    const toggleTheme = () => {

        const html = document.querySelector('html');

        html?.classList.toggle('dark');

        if(html?.classList.contains('dark')){

            localStorage.setItem('theme', 'dark');

            return setDarkTheme(true);
        }

        localStorage.setItem('theme', 'light');
        setDarkTheme(false);
    }
    
    useEffect(() => {

        const theme = localStorage.getItem('theme');
        
        if(theme){

            document.querySelector('html')?.classList.add(theme);
        }

        const html = document.querySelector('html');


        if(html?.classList.contains('dark')){

            return setDarkTheme(true);
        } 

        setDarkTheme(false);
        
    }, []);

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
                            <Nav.Link href="#" onClick={ toggleTheme } id="toggleThemeBtn">
                                { darkTheme === true ? <i className='bi bi-brightness-low-fill'></i> : <i className='bi bi-moon-fill'></i> }
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </header>
    );

}

export default NavbarMenu;