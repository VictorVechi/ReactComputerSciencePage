import React, { useEffect } from 'react';
import CreatePost from './create-post/CreatePost';
import UpdatePost from './update-post/UpdatePost';
import DeletePost from './delete-post/DeletePost';
import { StyledPostPanel } from './postPanel.styles';

const PostPanel = () => {
  const [createPost, setCreatePost] = React.useState(false);
  const [editPost, setEditPost] = React.useState(false);
  const [deletePost, setDeletePost] = React.useState(false);

  useEffect(() => {
    switch (window.location.pathname) {
      case '/dashboard/post/create-post':
        setCreatePost(true);
        break;
      case '/dashboard/post/edit-post':
        setEditPost(true);
        break;
      case '/dashboard/post/delete-post':
        setDeletePost(true);
        break;
      default:
        setCreatePost(false);
        setEditPost(false);
        setDeletePost(false);
        break;
    }
  }, [window.location.pathname]);

  return (
    <StyledPostPanel>
      {createPost && <CreatePost />}
      {editPost && <UpdatePost />}
      {deletePost && <DeletePost />}
    </StyledPostPanel>
  );
};

export default PostPanel;
