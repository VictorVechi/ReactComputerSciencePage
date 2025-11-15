import React, { useState, useEffect } from "react";
import { StyledUpdatePostForm } from "./postUpdateForm.styles";
import { useNavigate } from "react-router-dom";
import Api from "../../../../../service/gateway/Api";
import RichTextEditor from "../../../../common/rich-text-editor/RichTextEditor";

const PostUpdateForm = () => {
  const [titulo, setTitulo] = useState("");
  const [conteudo, setConteudo] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [id, setId] = useState("");

  const [posts, setPosts] = useState([]);
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!id) {
      alert("Selecione uma publicação para atualizar.");
      return;
    }

    if (selectedTags.length === 0) {
      alert("Selecione ao menos uma tag.");
      return;
    }

    const data = {
      title: titulo,
      content: conteudo,
      tags: selectedTags.map((tag) => ({ name: tag.name })),
    };

    try {
      const apiInstance = Api.getInstance();
      await apiInstance.putPublicacaoUpdate(id, data);
      navigate("/dashboard");
    } catch (error) {
      console.error("Erro ao atualizar publicação:", error);
    }
  };

  useEffect(() => {
    const fetchPostsAndTags = async () => {
      try {
        const apiInstance = Api.getInstance();
        const postsResponse = await apiInstance.getPublicacaoAll();
        const tagsResponse = await apiInstance.getTagAll();

        if (postsResponse && tagsResponse) {
          setPosts(postsResponse || []);
          setTags(tagsResponse.tags || []);
        }
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPostsAndTags();
  }, []);

  const toggleTag = (tag) => {
    const isSelected = selectedTags.some((t) => t._id === tag._id);
    const updatedTags = isSelected
      ? selectedTags.filter((t) => t._id !== tag._id)
      : [...selectedTags, tag];
    setSelectedTags(updatedTags);
  };

  if (loading) return <p>Carregando...</p>;
  if (!posts.length) return <p>Nenhum post encontrado.</p>;

  return (
    <StyledUpdatePostForm>
      <h1>Editar Publicação</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="post">Selecione a publicação</label>
        <select
          id="post"
          onChange={(e) => {
            const selected = posts.find((p) => p.id === e.target.value);
            setTitulo(selected?.title || "");
            setConteudo(selected?.content || "");
            setId(selected?.id || "");

            // Corrigir para que as tags selecionadas venham completas
            const tagObjects = tags.filter((tag) =>
              selected?.tags?.some((t) => t.name === tag.name)
            );
            setSelectedTags(tagObjects);
          }}
        >
          <option value="">Selecione uma publicação</option>
          {posts.map((post) => (
            <option key={post.id} value={post.id}>
              {post.title}
            </option>
          ))}
        </select>

        <label htmlFor="titulo">Título</label>
        <input
          id="titulo"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
        />

        <label htmlFor="conteudo">Conteúdo</label>
        <RichTextEditor
          value={conteudo}
          onChange={setConteudo}
          placeholder="Escreva o conteúdo do seu post..."
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

        <button type="submit">Atualizar Publicação</button>
      </form>
    </StyledUpdatePostForm>
  );
};

export default PostUpdateForm;
