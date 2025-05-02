import React, { useState, useEffect } from "react";
import { StyledCreatePostForm } from "./createPostForm.styles";
import { useNavigate } from "react-router-dom";
import { fetchTags } from "./handle-create-post/handleCreatePost";
import Api from "../../../../../service/gateway/Api";

const CreatePostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTags(setTags);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const sanitizedTitle = title.trim();
    const sanitizedContent = content.trim();

    if (!sanitizedTitle || !sanitizedContent || !selectedTag) return;

    try {
      const apiInstance = Api.getInstance();
      const data = {
        title: sanitizedTitle,
        content: sanitizedContent,
        tags: [selectedTag],
      };
      await apiInstance.postPublicacaoRegister(data);
      navigate("/dashboard");
    } catch (error) {
      console.error("Erro ao criar post:", error);
    }
  };

  return (
    <StyledCreatePostForm>
      <h1>Criar Novo Post</h1>
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

        <label htmlFor="tags">Tags</label>
        <select
          id="tags"
          value={selectedTag ? selectedTag._id : ""}
          onChange={(e) => {
            const selected = tags.find(tag => tag._id === e.target.value);
            setSelectedTag(selected);
          }}
          required
        >
          <option value="" disabled hidden>
            Selecione uma tag
          </option>
          {tags.map((tag) => (
            <option key={tag._id} value={tag._id}>
              {tag.name}
            </option>
          ))}
        </select>

        <button type="submit">Criar Post</button>
      </form>
    </StyledCreatePostForm>
  );
};

export default CreatePostForm;
