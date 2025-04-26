import React, { useEffect, useState } from "react";
import { StyledEditTagsForm } from "./form.styles";
import { useNavigate } from "react-router-dom";
import Api from "../../../../../service/gateway/Api";

const TagsEditForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState("");
  const [tags, setTags] = useState([]);
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
      console.error("Erro ao criar tag:", error);
    }
  };

  const handleGetTags = async () => {
    try {
      const apiInstance = Api.getInstance();
      const response = await apiInstance.getTagsAll();
      if (response) {
        setTags(response.tags);
      }
    } catch (error) {
      console.error("Erro ao obter tags:", error);
    }
  }

  useEffect(() => {
    handleGetTags();
  }
  , []);

  return (
    <StyledEditTagsForm>
      <h1>Editar tag</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="tags">Selecione a tag</label>
        <select
          id="tags"
          onChange={(e) => {
            const selectedTags = tags.find(tags => tags.id === e.target.value);
            setName(selectedTags.tagsName);
            setDescription(selectedTags.description);
            setId(selectedTags.id);
          }}
        >
          <option value="">Selecione uma Tag</option>
          {tags.map((tags) => (
            <option key={tags.id} value={tags.id}>
              {tags.tagsName}
            </option>
          ))}
        </select>
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