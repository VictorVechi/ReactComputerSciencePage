import React, { useState, useEffect } from "react";
import { StyledTagsDeleteForm, ModalOverlay } from "./form.styles.js";
import Api from "../../../../../service/gateway/Api";
import { LocalStorageEnum } from "../../../../../enum/LocalStorageEnum";

const TagDeleteForm = () => {
    const [tags, setTags] = useState([]);
    const [selectedTag, setSelectedTag] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const currentTagId = localStorage.getItem(LocalStorageEnum.TAG_ID);
    const apiInstance = Api.getInstance();

    useEffect(() => {
        const fetchTags = async () => {
            try {
                const response = await apiInstance.getTagAll();
                const formattedTags = response.tags.map(tag => ({
                    ...tag,
                    id: tag._id, 
                }));
                setTags(formattedTags);
                console.log("Tags formatadas:", formattedTags);
            } catch (error) {
                console.error("Erro ao buscar tags:", error);
            }
        };
    
        fetchTags();
    }, []);
    const handleDeleteTag = async () => {
        if (!selectedTag) return;

        try {
            await apiInstance.deleteTagById(selectedTag.id);
            setTags(tags.filter((tag) => tag.id !== selectedTag.id));
            setIsModalOpen(false);
            setSelectedTag(null);
        } catch (error) {
            console.error("Erro ao deletar tag.", error);
        }
    };

    useEffect(() => {
        console.log("Estado das tags:", tags);
    }, [tags]);

    return (
        <StyledTagsDeleteForm>
            <div>
                <h1>Deletar uma tag</h1>
                {tags
                    .filter(tag => tag._id && (!currentTagId || tag._id !== currentTagId))
                    .map((tag) => (
                        <div className="tag-card" key={`tag-${tag._id}`}>
                            <div>
                                <strong>{tag.name}</strong>
                                <p className="description">{tag.description}</p>
                            </div>
                            <button className="delete-button" onClick={() => { setSelectedTag(tag); setIsModalOpen(true); }}>
                                🗑️
                            </button>
                        </div>
                    ))}
            </div>

            {isModalOpen && (
                <ModalOverlay>
                    <div className="modal-content">
                        <h2>Tem certeza que deseja excluir?</h2>
                        <p>
                            Nome: <strong>{selectedTag.name}</strong><br />
                            Descrição: <code>{selectedTag.description}</code>
                        </p>
                        <div className="modal-actions">
                            <button className="cancel" onClick={() => { setIsModalOpen(false); }}>Cancelar</button>
                            <button className="confirm" onClick={() => { handleDeleteTag(); }}>Deletar</button>
                        </div>
                    </div>
                </ModalOverlay>
            )}
        </StyledTagsDeleteForm>
    );
};

export default TagDeleteForm;
