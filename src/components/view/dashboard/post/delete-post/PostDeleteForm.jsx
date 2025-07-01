import React, { useState, useEffect } from "react";
import { StyledPostDeleteForm, ModalOverlay } from "./postDeleteForm.styles";
import Api from "../../../../../service/gateway/Api";

const PostDeleteForm = () => {
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const apiInstance = Api.getInstance();

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await apiInstance.getPublicacaoAll();

                if (Array.isArray(response)) {
                    setPosts(response);
                } else {
                    console.warn("Resposta inesperada da API:", response);
                }
            } catch (error) {
                console.error("Erro ao buscar posts:", error);
            }
        };

        fetchPosts();
    }, []);

    const handleDeletePost = async () => {
        if (!selectedPost) return;

        try {
            await apiInstance.deletePublicacaoById(selectedPost.id);
            setPosts(posts.filter(post => post.id !== selectedPost.id));
            setIsModalOpen(false);
            setSelectedPost(null);
        } catch (error) {
            console.error("Erro ao deletar post:", error);
        }
    };

    return (
        <StyledPostDeleteForm>
            <div>
                <h1>Deletar uma publicação</h1>
                <p>Total de posts: {posts.length}</p>

                {posts.map((post) => (
                    <div className="post-card" key={post.id}>
                        <div>
                            <strong>{post.title}</strong>
                            <p className="content-preview">
                                {post.content.slice(0, 100)}...
                            </p>
                            <p>
                                <em>{post.tags?.map(tag => tag.name).join(", ")}</em>
                            </p>
                        </div>
                        <button
                            className="delete-button"
                            onClick={() => {
                                setSelectedPost(post);
                                setIsModalOpen(true);
                            }}
                        >
                            🗑️
                        </button>
                    </div>
                ))}
            </div>

            {isModalOpen && selectedPost && (
                <ModalOverlay>
                    <div className="modal-content">
                        <h2>Tem certeza que deseja excluir?</h2>
                        <p>
                            Título: <strong>{selectedPost.title}</strong>
                            <br />
                            ID: <code>{selectedPost.id}</code>
                        </p>
                        <div className="modal-actions">
                            <button className="cancel" onClick={() => setIsModalOpen(false)}>
                                Cancelar
                            </button>
                            <button className="confirm" onClick={handleDeletePost}>
                                Deletar
                            </button>
                        </div>
                    </div>
                </ModalOverlay>
            )}
        </StyledPostDeleteForm>
    );
};

export default PostDeleteForm;