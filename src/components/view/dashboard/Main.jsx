import React from "react";
import { StyledMainDashboard } from "./main.styles";
import Sidebar from "./sidebar/Sidebar";

const MainDashboard = ({ isAdmin }) => {
    return (
        <StyledMainDashboard>
        <Sidebar isAdmin={isAdmin} />
        </StyledMainDashboard>
    );
}

export default MainDashboard