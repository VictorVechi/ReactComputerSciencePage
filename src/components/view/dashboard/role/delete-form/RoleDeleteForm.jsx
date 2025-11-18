import React, { useEffect, useState } from "react";
import { StyledDeleteRoleForm } from "./form.styles";
import { useNavigate } from "react-router-dom";
import Api from "../../../../../service/gateway/Api";
import { toast } from "react-toastify";

const RoleDeleteForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState("");
  const [roles, setRoles] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!id) {
      toast.warn("Selecione um cargo para deletar.");
      return;
    }

    try {
      const apiInstance = Api.getInstance();
      await apiInstance.deleteRoleById(id);

      toast.success("Cargo deletado com sucesso!");
      navigate("/dashboard");

    } catch (error) {
      console.error("Erro ao deletar cargo:", error);
      toast.error("Erro ao deletar o cargo. Tente novamente!");
    }
  };

  const handleGetRoles = async () => {
    try {
      const apiInstance = Api.getInstance();
      const response = await apiInstance.getRoleAll();

      if (response) {
        setRoles(response.roles);
      } else {
        toast.warn("Nenhum cargo encontrado.");
      }

    } catch (error) {
      console.error("Erro ao obter cargos:", error);
      toast.error("Erro ao carregar cargos.");
    }
  };

  useEffect(() => {
    handleGetRoles();
  }, []);

  return (
    <StyledDeleteRoleForm>
      <h1>Deletar Cargo</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="role">Selecione o cargo</label>
        <select
          id="role"
          onChange={(e) => {
            const selectedRole = roles.find(role => role.id === e.target.value);

            if (selectedRole) {
              setName(selectedRole.roleName);
              setDescription(selectedRole.description);
              setId(selectedRole.id);
            }
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
          disabled
        />

        <button type="submit">Deletar cargo</button>
      </form>
    </StyledDeleteRoleForm>
  );
};

export default RoleDeleteForm;
