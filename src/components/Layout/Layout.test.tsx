import { render } from "@testing-library/react"
import Layout from "."
import { MemoryRouter } from "react-router-dom";

describe('Layout component', () => {

    it('Should render layout component', () => {

        render(
            <MemoryRouter>
                <Layout>
                    <div>Hello world</div>
                </Layout> 
            </MemoryRouter>
        );

        const el = document.querySelector('div');
        expect(el).toBeInTheDocument();
           

    });

})