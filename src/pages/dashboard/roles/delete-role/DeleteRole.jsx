import React from "react";
import { StyledDeleteRole } from "./deleteRole.styles";
import Header from "../../../../components/common/header/Header";
import Footer from "../../../../components/common/footer/Footer";
import RoleDeleteForm from "../../../../components/view/dashboard/role/delete-form/RoleDeleteForm";


const DeleteRole = () => {
    return (
        <StyledDeleteRole>
            <Header/>
            <main>
                <RoleDeleteForm/>
            </main>
            <Footer/>
        </StyledDeleteRole>
    )
};

export default DeleteRole