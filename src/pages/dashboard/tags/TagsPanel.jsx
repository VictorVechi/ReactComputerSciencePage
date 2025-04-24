import React, { useEffect } from 'react';
import CreateTags from './create-tags/CreateTags';
import UpdateTags from './update-tags/UpdateTags';
import { StyledTagsPanel } from './tagsPanel.styles';

const TagsPanel = () => {
    const [createTags, setCreateTags] = React.useState(false);
    const [editTags, setEditTags] = React.useState(false);
    const [deleteTags, setDeleteTags] = React.useState(false);

    useEffect(() => {
        switch (window.location.pathname) {
            case '/tags/create-tags': // Corrigido
                setCreateTags(true);
                break;
            case '/tags/edit-tags': // Corrigido
                setEditTags(true);
                break;
            case '/tags/delete-tags': // Corrigido
                setDeleteTags(true);
                break;
            default:
                setCreateTags(false);
                setEditTags(false);
                setDeleteTags(false);
                break;
        }
    }, [window.location.pathname]);

    return (
        <StyledTagsPanel>
            {createTags && <CreateTags />}
            {editTags && <UpdateTags />}
            {deleteTags && (
                <div>
                    <h2>Excluir Tag</h2>
                    <form>
                        <input type="text" placeholder="Nome da Tag" />
                        <button type="submit">Excluir</button>
                    </form>
                </div>
            )}
        </StyledTagsPanel>
    );
};

export default TagsPanel;
