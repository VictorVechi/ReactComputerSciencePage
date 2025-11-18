import React, { useEffect, useState } from "react";
import { StyledEditTagsForm } from "./form.styles";
import { useNavigate } from "react-router-dom";
import Api from "../../../../../service/gateway/Api";
import { toast } from "react-toastify";

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

      if (response?.data) {
        setTags(response.data);
      } else if (response?.tags) {
        setTags(response.tags);
      } else {
        console.warn("Formato de resposta inesperado:", response);
      }
    } catch (error) {
      console.error("Erro ao buscar tags:", error);
      toast.error("Erro ao buscar tags.");
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
      toast.error("Tag não encontrada.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!id) {
      console.error("ID da tag está vazio ou inválido");
      toast.error("Selecione uma tag antes de editar.");
      return;
    }

    try {
      const apiInstance = Api.getInstance();
      const data = { name, description };

      console.log("Enviando PUT com id:", id, "e dados:", data);
      await apiInstance.putTagUpdate(id, data);

      toast.success("Tag editada com sucesso!");
      navigate("/dashboard");
    } catch (error) {
      console.error("Erro ao editar tag:", error);
      toast.error("Erro ao editar tag.");
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
