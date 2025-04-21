import React from "react";
import { StyledOptionsPanel } from "./panel.styles";
import { useNavigate } from "react-router-dom";
import Button from "../../../common/button/Button";
import UserEditOptions from "../user/edit-user/UserEditOptions";

const OptionsPanel = ({ activeOption }) => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    }

    const setOptionName = () => {
        switch (activeOption) {
            case "user":
                return "Usuário";
            case "post":
                return "Post";
            case "roles":
                return "Cargo";
            default:
                return "";
        }
    }

    const optionName = setOptionName();

    return (
        <StyledOptionsPanel>
            <h2>{optionName}</h2>
            <div className="button-container">
                <Button
                    texto={`Cadastrar Novo ${optionName}`}
                    onClick={() => handleNavigation(`/dashboard/${activeOption}/create-${activeOption}`)}
                />
            </div>

            {activeOption === "user" ? (
                <UserEditOptions />
            ) : (
                <div className="button-container">
                    <Button
                        texto={`Editar ${optionName}`}
                        onClick={() => handleNavigation(`/dashboard/${activeOption}/edit-${activeOption}`)}
                    />
                </div>
            )}

            <div className="button-container">
                <Button
                    texto={`Deletar ${optionName}`}
                    onClick={() => handleNavigation(`/dashboard/${activeOption}/delete-${activeOption}`)}
                />
            </div>

        </StyledOptionsPanel>
    );
};

export default OptionsPanel;