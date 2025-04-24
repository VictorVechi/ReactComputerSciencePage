import React from "react"
import { StyledEditUserInfo } from "./editUserInfo.styles"
import Header from "../../../../../components/common/header/Header"
import Footer from "../../../../../components/common/footer/Footer" 
import UserUpdateInfoForm from "../../../../../components/view/dashboard/user/edit-user/edit-user-info/UserUpdateInfoForm"

const EditUserInfo = () => {

    return (
        <StyledEditUserInfo>
            <Header />
            <main>
                <UserUpdateInfoForm />
            </main>
            <Footer />
        </StyledEditUserInfo >
    )
}

export default EditUserInfo;