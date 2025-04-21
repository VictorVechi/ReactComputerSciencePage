import React, { useState, useEffect } from "react";
import { StyledCreateUserForm } from "./createUserForm.styles";
import { useNavigate } from "react-router-dom";
import { fetchRoles } from "./handle-create-user/handleCreateUser";
import Api from "../../../../../service/gateway/Api";

const CreateUserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [roles, setRoles] = useState([]);
  const [selectedRole, setSelectedRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchRoles(setRoles);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const apiInstance = Api.getInstance();
      const data = {
        name,
        email,
        password,
        id_cargo: selectedRole.id,
      };
      await apiInstance.postUsuarioRegister(data);
      navigate("/dashboard");
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
    }
  };

  return (
    <StyledCreateUserForm>
      <h1>Criar Novo Usuário</h1>
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
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label htmlFor="roles">Cargo</label>
        <select
          id="roles"
          value={selectedRole ? selectedRole.id : ""}
          onChange={(e) => {
            const selected = roles.find(role => role.id === e.target.value);
            setSelectedRole(selected);
          }}
          required
        >
          <option value="" disabled hidden>
            Selecione um cargo
          </option>
          {roles.map((role) => (
            <option key={role.id} value={role.id}>
              {role.roleName}
            </option>
          ))}
        </select>
        <button type="submit">Criar Usuário</button>
      </form>
    </StyledCreateUserForm>
  );
};

export default CreateUserForm;