import React from "react";
import { StyledEditUserPw } from "./editUserPw.styles";
import Header from "../../../../../components/common/header/Header";
import UserUpdatePwForm from "../../../../../components/view/dashboard/user/edit-user/edit-user-password/UserUpdatePwForm";
import Footer from "../../../../../components/common/footer/Footer";

const EditUserPw = () => {

    return (
        <StyledEditUserPw>
            <Header />
            <main>
                <UserUpdatePwForm />
            </main>
            <Footer />
        </StyledEditUserPw>
    )
}

export default EditUserPw;