import React from "react";
import { StyledCreatePostMain } from "./createPostMain.styles";
import CreatePostForm from "./form/Form";

const CreatePostMain = () => {

    return (
        <StyledCreatePostMain>
            <div className='postForm'>
                <h1>Criar Novo Post</h1>
                <CreatePostForm />
            </div>
        </StyledCreatePostMain>
    );
};

export default CreatePostMain;