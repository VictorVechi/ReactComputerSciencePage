import React, { useState, useEffect } from "react";
import { StyledUserUpdateInfoForm } from "./userUpdateInfoForm.styles";
import { useNavigate } from "react-router-dom";
import Api from "../../../../../../service/gateway/Api";

const UserUpdateInfoForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    // useEffect(() => {
    //     fetchRoles(setRoles);
    // }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("working");
        // try {
        //     const apiInstance = Api.getInstance();
        //     const data = {
        //         name,
        //         email,
        //     };
        //     await apiInstance.postUsuarioRegister(data);
        //     navigate("/dashboard");
        // } catch (error) {
        //     console.error("Erro ao criar usuário:", error);
        // }
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