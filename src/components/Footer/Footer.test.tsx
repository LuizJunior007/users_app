import { render } from '@testing-library/react';
import  '@testing-library/jest-dom';
import Footer from '.';


describe('Footer component', () => {

    it('Should render footer component', () => {

        render(<Footer />);
        const footer = document.querySelector('footer');

        expect(footer).toBeInTheDocument();
    });

});

