import React, { useState, useEffect } from "react";
import { StyledUpdatePostForm } from "./postUpdateForm.styles";
import { useNavigate } from "react-router-dom";
import Api from "../../../../../service/gateway/Api";

const PostUpdateForm = () => {
  const [titulo, setTitulo] = useState("");
  const [conteudo, setConteudo] = useState("");
  const [tagId, setTagId] = useState("");
  const [id, setId] = useState("");

  const [posts, setPosts] = useState([]);
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de carregamento

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const apiInstance = Api.getInstance();
      const data = { titulo, conteudo, tagId };
      await apiInstance.putPublicacaoUpdate(id, data);
      navigate("/dashboard");
    } catch (error) {
      console.error("Erro ao atualizar publicação:", error);
    }
  };

  // Carregar posts e tags
  useEffect(() => {
    const fetchPostsAndTags = async () => {
      try {
        const apiInstance = Api.getInstance();
        const postsResponse = await apiInstance.getPublicacaoAll();
        const tagsResponse = await apiInstance.getTagAll();

        // Adicionando log para verificar a resposta
        console.log('Posts Response:', postsResponse);
        console.log('Tags Response:', tagsResponse);

        if (postsResponse && tagsResponse) {
          setPosts(postsResponse || []);  // Agora usa posts diretamente
          setTags(tagsResponse.tags || []); // Ajuste para acessar tags diretamente
        }
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      } finally {
        setLoading(false); // Dados carregados, setar loading como false
      }
    };

    fetchPostsAndTags();
  }, []);

  // Verificar se os dados estão carregados
  if (loading) {
    return <p>Carregando...</p>; // Exibir uma mensagem enquanto os dados são carregados
  }

  // Se posts estiver vazio, pode ser necessário verificar a estrutura da resposta
  if (!posts.length) {
    return <p>Nenhum post encontrado.</p>;
  }

  return (
    <StyledUpdatePostForm>
      <h1>Editar Publicação</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="post">Selecione a publicação</label>
        <select
          id="post"
          onChange={(e) => {
            const selected = posts.find((p) => p.id === e.target.value);
            setTitulo(selected?.title || "");  // Ajuste o nome do campo
            setConteudo(selected?.content || "");  // Ajuste o nome do campo
            setTagId(selected?.tags[0]?._id || "");  // Ajuste para acessar a tag corretamente
            setId(selected?.id || "");
          }}
        >
          <option value="">Selecione uma publicação</option>
          {posts.length > 0 &&
            posts.map((post) => (
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
        <textarea
          id="conteudo"
          value={conteudo}
          onChange={(e) => setConteudo(e.target.value)}
          required
        />

        <label htmlFor="tag">Tag</label>
        <select
          id="tag"
          value={tagId}
          onChange={(e) => setTagId(e.target.value)}
          required
        >
          <option value="">Selecione uma tag</option>
          {tags.length > 0 &&
            tags.map((tag) => (
              <option key={tag._id} value={tag._id}>
                {tag.name}
              </option>
            ))}
        </select>

        <button type="submit">Atualizar Publicação</button>
      </form>
    </StyledUpdatePostForm>
  );
};

export default PostUpdateForm;
