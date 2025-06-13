import React, { useState } from "react";
import { StyledUserOptions } from "./userOptions.styles";
import { useNavigate } from "react-router-dom";
import Button from "../../../common/button/Button";
import { LocalStorageEnum } from "../../../../enum/LocalStorageEnum";

const UserOptions = () => {
    const isAdmin = localStorage.getItem(LocalStorageEnum.ROLE_KEY) === "admin";
    const [editSelf, setEditSelf] = useState(false);
    const [editAnotherUser, setEditAnotherUser] = useState(false);
    const navigate = useNavigate();

    return (
        <StyledUserOptions>
            {isAdmin && !editAnotherUser && !editSelf && (
                <>
                    <div className="button-container">
                        <Button
                            texto="Cadastrar novo usuário"
                            onClick={() => navigate("/dashboard/user/create-user")}
                        />
                    </div>
                    <div className="button-container">
                        <Button
                            texto="Alterar meu usuário"
                            onClick={() => setEditSelf(true)}
                        />
                    </div>
                    <div className="button-container">
                        <Button
                            texto="Alterar outro usuário"
                            onClick={() => setEditAnotherUser(true)}
                        />
                    </div>
                </>
            )}

            {(!isAdmin || editSelf) && (
                <>
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
                </>
            )}

            {isAdmin && editAnotherUser && (
               navigate("/dashboard/user/edit-other")
            )}
        </StyledUserOptions>
    );
};

export default UserOptions;