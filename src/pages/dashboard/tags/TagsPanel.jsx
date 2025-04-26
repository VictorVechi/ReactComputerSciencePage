import React, { useEffect } from 'react';
import CreateTags from './create-tags/CreateTags';
import EditTags from './edit-tags/EditTags';
import DeleteTags from './delete-tags/DeleteTags';
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
            {deleteTags && <DeleteTags />}
        </StyledTagsPanel>
    );
};

export default TagsPanel;
