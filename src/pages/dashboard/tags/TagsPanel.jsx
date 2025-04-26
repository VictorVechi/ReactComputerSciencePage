import React, { useEffect } from 'react';
import CreateTags from './create-tags/CreateTags';
import EditTags from './edit-tags/EditTags';
import { StyledTagsPanel } from './tagsPanel.styles';

const TagsPanel = () => {
    const [createTags, setCreateTags] = React.useState(false);
    const [editTags, setEditTags] = React.useState(false);
    const [deleteTags, setDeleteTags] = React.useState(false);

    useEffect(() => {
        switch (location.pathname) {
            case '/dashboard/tags/create-tags':
                setCreateTags(true);
                break;
            case '/dashboard/tags/edit-tags':
                setEditTags(true);
                break;
            case '/dashboard/tags/delete-tags':
                setDeleteTags(true);
                break;
            default:
                setCreateTags(false);
                setEditTags(false);
                setDeleteTags(false);
                break;
        }
    }, [location.pathname]);

    return (
        <StyledTagsPanel>
            {createTags && <CreateTags />}
            {editTags && <EditTags />}
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
