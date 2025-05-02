import React from "react";
import { StyledUserOptions } from "./userOptions.styles";
import { useNavigate } from "react-router-dom";
import Button from "../../../common/button/Button";
import { LocalStorageEnum } from "../../../../enum/LocalStorageEnum";

const UserOptions = () => {
    const isAdmin = localStorage.getItem(LocalStorageEnum.ROLE_KEY) === "admin";
    const navigate = useNavigate();

    return (
        <StyledUserOptions>
            {isAdmin && (
                <div className="button-container">
                    <Button
                        texto="Cadastrar novo usuário"
                        onClick={() => navigate("/dashboard/user/create-user")}
                    />
                </div>
            )}

            <div className="button-container">
                <Button
                    texto="Editar Nome e Email"
                    onClick={() => navigate("/dashboard/user/edit-user-info")}
                />
            </div>
            <div className="button-container">
                <Button
                    texto="Editar Senha"
                    onClick={() => navigate("/dashboard/user/edit-user-password")}
                />
            </div>

            {isAdmin && (
                <div className="button-container">
                    <Button
                        texto="Deletar usuário"
                        onClick={() => navigate("/dashboard/user/delete-user")}
                    />
                </div>
            )}
        </StyledUserOptions>
    );
};


export default UserOptions;