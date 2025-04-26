import React, { useState } from "react";
import { StyledEditTagsForm } from "./form.styles";
import { useNavigate } from "react-router-dom";
import Api from "../../../../../service/gateway/Api";

const TagsEditForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const apiInstance = Api.getInstance();
      const data = {
        name,
        description,
      };
      await apiInstance.putTagsEdit(data, id);
      navigate("/dashboard");
    } catch (error) {
      console.error("Erro ao editar tag:", error);
    }
  };

  return (
    <StyledEditTagsForm>
      <h1>Editar tag</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">ID da Tag</label>
        <input
          type="text"
          id="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
        <label htmlFor="name">Nome da Tag</label>
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
        <button type="submit">Editar Tag</button>
      </form>
    </StyledEditTagsForm>
  );
};

export default TagsEditForm;
