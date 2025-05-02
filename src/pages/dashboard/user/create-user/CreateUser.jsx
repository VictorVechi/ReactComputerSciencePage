import React from "react";
import { StyledCreateUser } from "./createUser.styles";
import CreateUserForm from "../../../../components/view/dashboard/user/create-user/CreateUserForm";
import Header from "../../../../components/common/header/Header";
import Footer from "../../../../components/common/footer/Footer";

const CreateUser = () => {
    return (
        <StyledCreateUser>
            <Header />
            <main>
                <CreateUserForm />
            </main>
            <Footer />
        </StyledCreateUser>
    )
}

export default CreateUser