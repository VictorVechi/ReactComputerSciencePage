import React, { useEffect, useState } from "react";
import { StyledUpdateRoleForm } from "./form.styles";
import { useNavigate } from "react-router-dom";
import Api from "../../../../../service/gateway/Api";
import { toast } from "react-toastify";

const RoleUpdateForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState("");
  const [roles, setRoles] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const sanitizedName = name.trim();
    const sanitizedDescription = description.trim();

    if (!id) {
      toast.warn("Selecione um cargo para editar.");
      return;
    }

    if (!sanitizedName || !sanitizedDescription) {
      toast.warn("Preencha todos os campos antes de salvar.");
      return;
    }

    try {
      const apiInstance = Api.getInstance();
      const data = {
        name: sanitizedName,
        description: sanitizedDescription,
      };

      await apiInstance.putRoleUpdate(data, id);

      toast.success("Cargo atualizado com sucesso!");
      navigate("/dashboard");

    } catch (error) {
      console.error("Erro ao atualizar cargo:", error);
      toast.error("Erro ao atualizar o cargo. Tente novamente!");
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
    <StyledUpdateRoleForm>
      <h1>Editar Cargo</h1>

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
