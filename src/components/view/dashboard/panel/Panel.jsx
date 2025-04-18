import React from "react";
import { StyledOptionsPanel } from "./panel.styles";
import { useNavigate } from "react-router-dom";
import Button from "../../../common/button/Button";

const OptionsPanel = ({ activeOption }) => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <StyledOptionsPanel>
            <h2>{activeOption === "user" ? "Usuário" : "Posts"}</h2>
            <div className="button-container">
                <Button
                    texto={`Cadastrar Novo ${activeOption === "user" ? "Usuário" : "Post"}`}
                    onClick={() => handleNavigation(`/dashboard/create-${activeOption}`)}
                />
            </div>
        </StyledOptionsPanel>
    );
};

export default OptionsPanel;