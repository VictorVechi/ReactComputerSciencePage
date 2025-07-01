import React, { useEffect, useState } from "react";
import { StyledEditTagsForm } from "./form.styles";
import { useNavigate } from "react-router-dom";
import Api from "../../../../../service/gateway/Api";

const TagsEditForm = () => {
  const [tags, setTags] = useState([]);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleGetTags = async () => {
    try {
      const apiInstance = Api.getInstance();
      const response = await apiInstance.getTagAll();
      console.log("Resposta da API:", response);

      // Verifica onde estão as tags no objeto de resposta
      if (response?.data) {
        setTags(response.data); // ajuste se for response.data.tags
      } else if (response?.tags) {
        setTags(response.tags);
      } else {
        console.warn("Formato de resposta inesperado:", response);
      }
    } catch (error) {
      console.error("Erro ao buscar tags:", error);
    }
  };

  useEffect(() => {
    handleGetTags();
  }, []);

    const handleTagSelect = (e) => {
        const selectedId = e.target.value;

        const selectedTag = tags.find((tag) => String(tag._id) === selectedId);

        if (selectedTag) {
          console.log("Tag selecionada:", selectedTag);
          setId(String(selectedTag._id));
          setName(selectedTag.name);
          setDescription(selectedTag.description);
        } else {
          console.warn("Tag não encontrada para ID:", selectedId);
        }
      };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!id) {
      console.error("ID da tag está vazio ou inválido");
      return;
    }

    try {
      const apiInstance = Api.getInstance();
      const data = { name, description };

      console.log("Enviando PUT com id:", id, "e dados:", data);
      await apiInstance.putTagUpdate(id, data);

      navigate("/dashboard");
    } catch (error) {
      console.error("Erro ao editar tag:", error);
    }
  };

  return (
    <StyledEditTagsForm>
      <h1>Editar Tag</h1>
      <form onSubmit={handleSubmit}>
      <label htmlFor="tag">Selecione a tag</label>
      <select id="tag" onChange={handleTagSelect} value={id}>
        <option value="">Selecione uma tag</option>
        {tags.map((tag) => (
          <option key={tag._id} value={tag._id}>
            {tag.name}
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
