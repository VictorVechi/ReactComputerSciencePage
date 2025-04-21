import React from "react";
import { StyledCreateUser } from "./createUser.styles";
import CreateUserMain from "../../../../components/view/dashboard/user/create-user/CreateUserMain";
import Header from "../../../../components/common/header/Header";
import Footer from "../../../../components/common/footer/Footer";

const CreateUser = () => {
    return (
        <StyledCreateUser>
            <Header />
            <main>
                <CreateUserMain />
            </main>
            <Footer />
        </StyledCreateUser>
    )
}

export default CreateUser