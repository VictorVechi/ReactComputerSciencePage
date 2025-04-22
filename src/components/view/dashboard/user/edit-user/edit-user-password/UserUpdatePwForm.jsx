import React, { useState } from "react";
import { StyledUserUpdatePasswordForm } from "./userUpdatePwForm.styles";
import { useNavigate } from "react-router-dom";
import Api from "../../../../../../service/gateway/Api";
import { LocalStorageEnum } from "../../../../../../enum/LocalStorageEnum";

const UserUpdatePwForm = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const userID = localStorage.getItem(LocalStorageEnum.USER_ID)

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const sanitizedEmail = email.trim()
    const sanitizedPw = password.trim()

    if(!sanitizedEmail || !sanitizedPw) return;

    try {
      const apiInstance = Api.getInstance();
      const data = {
        id: userID,
        email: sanitizedEmail,
        password: sanitizedPw
      };

      await apiInstance.putUsuarioPassword(data);
      navigate("/dashboard");
    } catch (error) {
      console.error("Erro ao atualizar senha:", error);
    }
  };

  return (
    <StyledUserUpdatePasswordForm>
      <h1>Alterar senha</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Confirme seu email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Nova senha</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Atualizar Senha</button>
      </form>
    </StyledUserUpdatePasswordForm>
  );
};

export default UserUpdatePwForm;