import { render, fireEvent } from "@testing-library/react";
import NavbarMenu from ".";
import { MemoryRouter } from "react-router-dom";

const mockToggleTheme = () => {

    return 'OK';

}

describe('Navbar component', () => {

    it('Should render navbar component', () => {

        render(
            <MemoryRouter>
                <NavbarMenu />
            </MemoryRouter>
        );
        const el = document.querySelector('header');
        expect(el).toBeInTheDocument();

    });

    it('Should call the function toggleTheme', () => {

        const btn = document.getElementById('toggleThemeBtn');

        if(btn){
            fireEvent.click(btn);
        }

        

    });

});