import React, { useState } from "react";
import { StyledCreateRoleForm } from "./form.styles";
import { useNavigate } from "react-router-dom";
import Api from "../../../../../service/gateway/Api";

const RoleCreateForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const apiInstance = Api.getInstance();
      const data = {
        name,
        description,
      };
      await apiInstance.postRoleRegister(data);
      navigate("/dashboard");
    } catch (error) {
      console.error("Erro ao criar cargo:", error);
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