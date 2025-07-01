import React, { useState } from "react";
import { StyledCreateTagsForm } from "./form.styles";
import { useNavigate } from "react-router-dom";
import Api from "../../../../../service/gateway/Api";

const TagsCreateForm = () => {
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
      await apiInstance.postTagRegister(data);
      navigate("/dashboard");
    } catch (error) {
      console.error("Erro ao criar tag:", error);
    }
  };

  return (
    <StyledCreateTagsForm>
      <h1>Criar Nova Tag</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nome da tag</label>
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
        <button type="submit">Criar tag</button>
      </form>
    </StyledCreateTagsForm>
  );
};

export default TagsCreateForm;