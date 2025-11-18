import React, { useState } from "react";
import { StyledCreateRoleForm } from "./form.styles";
import { useNavigate } from "react-router-dom";
import Api from "../../../../../service/gateway/Api";
import { toast } from "react-toastify";

const RoleCreateForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const sanitizedName = name.trim();
    const sanitizedDescription = description.trim();

    if (!sanitizedName || !sanitizedDescription) {
      toast.warn("Preencha todos os campos.");
      return;
    }

    try {
      const apiInstance = Api.getInstance();
      const data = {
        name: sanitizedName,
        description: sanitizedDescription,
      };

      await apiInstance.postRoleRegister(data);

      toast.success("Cargo criado com sucesso!");
      navigate("/dashboard");

    } catch (error) {
      console.error("Erro ao criar cargo:", error);
      toast.error("Erro ao criar o cargo. Tente novamente!");
    }
  };

  return (
    <StyledCreateRoleForm>
      <h1>Criar Novo Cargo</h1>

      <form onSubmit={handleSubmit}>
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

        <button type="submit">Criar cargo</button>
      </form>
    </StyledCreateRoleForm>
  );
};

export default RoleCreateForm;
