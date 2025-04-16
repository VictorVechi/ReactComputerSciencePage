import React, { useEffect, useState } from "react";
import { StyledUpdateRoleForm } from "./form.styles";
import { useNavigate } from "react-router-dom";
import Api from "../../../../../service/gateway/Api";

const RoleUpdateForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState("");
  const [roles, setRoles] = useState([]);
  const navigate = useNavigate();
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const apiInstance = Api.getInstance();
      const data = {
        name,
        description,
      };
      await apiInstance.putRoleUpdate(data, id);
      navigate("/dashboard");
    } catch (error) {
      console.error("Erro ao criar cargo:", error);
    }
  };

  const handleGetRoles = async () => {
    try {
      const apiInstance = Api.getInstance();
      const response = await apiInstance.getRoleAll();
      if (response) {
        setRoles(response.roles);
      }
    } catch (error) {
      console.error("Erro ao obter cargos:", error);
    }
  }

  useEffect(() => {
    handleGetRoles();
  }
  , []);

  return (
    <StyledUpdateRoleForm>
      <h1>Editar Cargo</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="role">Selecione o cargo</label>
        <select
          id="role"
          onChange={(e) => {
            const selectedRole = roles.find(role => role.id === e.target.value);
            setName(selectedRole.roleName);
            setDescription(selectedRole.description);
            setId(selectedRole.id);
          }}
        >
          <option value="">Selecione um cargo</option>
          {roles.map((role) => (
            <option key={role.id} value={role.id}>
              {role.roleName}
            </option>
          ))}
        </select>
        <label htmlFor="name">Nome do cargo</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="description">Descrição</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit">Editar cargo</button>
      </form>
    </StyledUpdateRoleForm>
  );
};

export default RoleUpdateForm;