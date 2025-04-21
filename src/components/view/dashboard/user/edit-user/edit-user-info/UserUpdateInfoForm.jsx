import React, { useState, useEffect } from "react";
import { StyledUserUpdateInfoForm } from "./userUpdateInfoForm.styles";
import { useNavigate } from "react-router-dom";
import Api from "../../../../../../service/gateway/Api";
import { LocalStorageEnum } from "../../../../../../enum/LocalStorageEnum";

const UserUpdateInfoForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const apiInstance = Api.getInstance();
    const userID = localStorage.getItem(LocalStorageEnum.USER_ID);
    const navigate = useNavigate();

    useEffect(() => {
        const getUserData = async () => {
            const user_data = await apiInstance.getUsuarioById(userID);

            setName(user_data.user.name);
            setEmail(user_data.user.email);
        }

        getUserData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = {
                id: userID,
                name,
                email,
            };

            await apiInstance.putUsuarioData(data);
            navigate("/dashboard");
        } catch (error) {
            console.error("Erro ao criar usuário:", error);
        }
    };

    return (
        <StyledUserUpdateInfoForm>
            <h1>Alterar informações</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nome</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">Atualizar informações</button>
            </form>
        </StyledUserUpdateInfoForm>
    );
};

export default UserUpdateInfoForm;