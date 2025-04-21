import React from "react";
import { StyledUserEditOptions } from "./userEditOptions.styles";
import { useNavigate } from "react-router-dom";
import Button from "../../../../common/button/Button";

const UserEditOptions = () => {
    const navigate = useNavigate();
    
    return (
        <StyledUserEditOptions>
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
        </StyledUserEditOptions>
    );
};


export default UserEditOptions;