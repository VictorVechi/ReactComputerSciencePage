import React from "react";
import { StyledListUsers } from "./listUsers.styles";
import Header from "../../../../components/common/header/Header";
import Footer from "../../../../components/common/footer/Footer";
import ListUsersForm from "../../../../components/view/dashboard/user/list-user/ListUsersForm";

const ListUser = () => {
    return (
        <StyledListUsers>
            <Header />
            <main>
                <ListUsersForm />
            </main>
            <Footer />
        </StyledListUsers>
    )
}

export default ListUser