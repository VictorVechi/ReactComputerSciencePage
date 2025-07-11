import React, { useState, useEffect } from "react";
import { StyledUserUpdateInfoForm } from "./userUpdateInfoForm.styles";
import { useNavigate } from "react-router-dom";
import Api from "../../../../../../service/gateway/Api";
import { LocalStorageEnum } from "../../../../../../enum/LocalStorageEnum";

const UserUpdateInfoForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
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

        const sanitizedName = name.trim();
        const sanitizedEmail = email.trim();

        if (!sanitizedEmail || !sanitizedName) return;

        try {
            const data = {
                id: userID,
                name: sanitizedName,
                email: sanitizedEmail,
            };

            await apiInstance.putUsuarioData(data);
            navigate("/dashboard");
        } catch (error) {
            console.error("Erro ao atualizar informações do usuário:", error);
        }
    };

    const handleEmailInvalid = (e) => {
        e.preventDefault();
        setEmailError("Insira um email válido");
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (emailError) {
            setEmailError("");
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
                    required
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    onInvalid={handleEmailInvalid}
                    required
                    style={{
                        borderColor: emailError ? "red" : undefined,
                    }}
                />
                {emailError && (
                    <p style={{ color: "red", fontSize: "14px", marginBottom: "10px" }}>
                        {emailError}
                    </p>
                )}
                <button type="submit">Atualizar informações</button>
            </form>
        </StyledUserUpdateInfoForm>
    );
};

export default UserUpdateInfoForm;