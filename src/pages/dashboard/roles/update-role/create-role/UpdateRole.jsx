import React from "react";
import { StyledUpdateRole } from "./updateRole.styles";
import Header from "../../../../../components/common/header/Header";
import Footer from "../../../../../components/common/footer/Footer";
import RoleUpdateForm from "../../../../../components/view/dashboard/role/update-form/RoleUpdateForm";


const UpdateRole = () => {
    return (
        <StyledUpdateRole>
            <Header/>
            <main>
                <RoleUpdateForm/>
            </main>
            <Footer/>
        </StyledUpdateRole>
    )
};

export default UpdateRole