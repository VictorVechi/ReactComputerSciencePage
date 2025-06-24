import React from "react";
import { StyledCreateRole } from "./createRole.styles";
import Header from "../../../../components/common/header/Header";
import Footer from "../../../../components/common/footer/Footer";
import RoleCreateForm from "../../../../components/view/dashboard/role/create-form/RoleCreateForm";

const CreateRole = () => {
    return (
        <StyledCreateRole>
            <Header />
            <main>
                <RoleCreateForm />
            </main>
            <Footer />
        </StyledCreateRole>
    )
};

export default CreateRole