import React, { useState, useEffect } from "react";
import { StyledMainDashboard } from "./main.styles";
import Sidebar from "./sidebar/Sidebar";
import OptionsPanel from "./panel/Panel";

const MainDashboard = ({ isAdmin }) => {
    const [activeOption, setActiveOption] = useState("post");

    useEffect(() => {
        setActiveOption("post");
    }, []);

    return (
        <StyledMainDashboard>
            <Sidebar isAdmin={isAdmin} setActiveOption={setActiveOption} />
            <OptionsPanel activeOption={activeOption} />
        </StyledMainDashboard>
    );
}

export default MainDashboard;