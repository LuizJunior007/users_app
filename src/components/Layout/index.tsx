import { ReactNode } from "react";
import NavbarMenu from "../NavbarMenu";
import Footer from "../Footer";

type LayoutProps = {

    children: ReactNode

}

const Layout = ({ children } : LayoutProps ) => {

    return(

        <div className="main">
            <div>
                <NavbarMenu />

                <div className="container">
                    <div className="row mt-5">
                        <div className="col-12">
                            { children }    
                        </div>    
                    </div>    
                </div>
            </div>

            <Footer /> 
        </div>
        
    );

}

export default Layout;