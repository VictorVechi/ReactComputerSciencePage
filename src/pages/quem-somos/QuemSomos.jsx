import React from "react";
import { StyledQuemSomos } from "./QuemSomos.styles";
import QuemSomosMain from "../../components/view/quem-somos/Main";
import Footer from "../../components/common/footer/Footer";
import Header from "../../components/common/header/Header";


const QuemSomos = () => {
    return (
        <StyledQuemSomos>
            <Header />
            <main>
                <QuemSomosMain />
            </main>
            <Footer />
        </StyledQuemSomos>

    )
}; export default QuemSomos;