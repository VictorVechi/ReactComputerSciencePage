import React, { useState } from "react";
import { StyledUserUpdatePasswordForm } from "./userUpdatePwForm.styles";
import { useNavigate } from "react-router-dom";
import Api from "../../../../../../service/gateway/Api";
import { LocalStorageEnum } from "../../../../../../enum/LocalStorageEnum";
import { regexPassword } from "../edit-user-password/EditUserPassword";

const UserUpdatePwForm = () => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  

  const isValidPassword = regexPassword(newPassword);
  const passwordsMatch = newPassword === confirmPassword;

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!password || !newPassword || !confirmPassword) return;

    if (newPassword !== confirmPassword) {
      return;
    }

    try {
      const apiInstance = Api.getInstance();
      const data = {
        password,
        newPassword
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
        <label htmlFor="password">Senha atual</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label htmlFor="password">Nova senha</label>
        <input
          type="password"
          id="new-password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
          style={{
            borderColor: newPassword && !isValidPassword ? "red" : undefined,
          }}
        />
        {newPassword && !isValidPassword && (
          <p>
            A nova senha deve ter pelo menos 8 caracteres, uma letra maiúscula, uma minúscula e um número.
          </p>
        )}
        <label htmlFor="password">Confirme nova senha</label>
        <input
          type="password"
          id="confirm-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          style={{
            borderColor: confirmPassword && !passwordsMatch ? "red" : undefined,
          }}
        />
        {confirmPassword && !passwordsMatch && (
          <p>
            As senhas não coincidem
          </p>
        )}
        <button type="submit" disabled={!isValidPassword || !passwordsMatch}>
          Atualizar Senha
        </button>
      </form>
    </StyledUserUpdatePasswordForm>
  );
};

export default UserUpdatePwForm;