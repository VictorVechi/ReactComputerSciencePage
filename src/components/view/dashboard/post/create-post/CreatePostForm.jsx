import React, { useState, useEffect } from "react";
import { StyledCreatePostForm } from "./createPostForm.styles";
import { useNavigate } from "react-router-dom";
import { fetchTags } from "./handle-create-post/handleCreatePost";
import Api from "../../../../../service/gateway/Api";

const CreatePostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // "success" ou "error"

  const navigate = useNavigate();

  useEffect(() => {
    fetchTags((data) => {
      setTags(data);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const sanitizedTitle = title.trim();
    const sanitizedContent = content.trim();

    if (!sanitizedTitle || !sanitizedContent || selectedTags.length === 0) {
      setMessage("Preencha todos os campos obrigatórios.");
      setMessageType("error");
      return;
    }

    try {
      const apiInstance = Api.getInstance();
      const data = {
        title: sanitizedTitle,
        content: sanitizedContent,
        tags: selectedTags.map(tag => ({ name: tag.name })),
      };

      await apiInstance.postPublicacaoRegister(data);

      // Exibe mensagem de sucesso antes de redirecionar
      setMessage("Post criado com sucesso!");
      setMessageType("success");

      // Aguarda 3s antes de navegar (tempo da animação e leitura)
      setTimeout(() => navigate("/dashboard"), 1500);

    } catch (error) {
      console.error("Erro ao criar post:", error);

      if (error.response && error.response.status === 400) {
        const serverMessage =
          error.response.data?.message || "Título já existente ou dados inválidos.";
        setMessage(serverMessage);
      } else {
        setMessage("Erro ao criar o post. Tente novamente.");
      }

      setMessageType("error");

      // Limpa mensagem após 4s (opcional)
      setTimeout(() => {
        setMessage("");
        setMessageType("");
      }, 4000);
    }
  };

  const toggleTag = (tag) => {
    const isSelected = selectedTags.some((t) => t._id === tag._id);
    if (isSelected) {
      setSelectedTags(selectedTags.filter((t) => t._id !== tag._id));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <StyledCreatePostForm>
      <h1>Criar Novo Post</h1>

      {/* Mensagem de feedback */}
      {message && (
        <div className={`feedback-message ${messageType}`}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Título</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label htmlFor="content">Conteúdo</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />

        <label>Tags</label>
        <div className="tag-selector">
          {tags.map((tag) => {
            const isSelected = selectedTags.some((t) => t._id === tag._id);
            return (
              <button
                type="button"
                key={tag._id}
                className={`tag-button ${isSelected ? "selected" : ""}`}
                onClick={() => toggleTag(tag)}
              >
                {tag.name}
              </button>
            );
          })}
        </div>

        <button type="submit">Criar Post</button>
      </form>
    </StyledCreatePostForm>
  );
};

export default CreatePostForm;
