import React from "react";
import { StyledDeleteUser } from "./deleteUser.styles";
import Header from "../../../../components/common/header/Header";
import Footer from "../../../../components/common/footer/Footer";
import UserDeleteForm from "../../../../components/view/dashboard/user/delete-user/UserDeleteForm";

const DeleteUser = () => {
    return (
        <StyledDeleteUser>
            <Header />
            <main>
                <UserDeleteForm />
            </main>
            <Footer />
        </StyledDeleteUser>
    )
}

export default DeleteUser