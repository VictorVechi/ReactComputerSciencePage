import React from "react";
import { StyledCreatePost } from "./createPost.styles";
import Header from "../../../../components/common/header/Header";
import Footer from "../../../../components/common/footer/Footer";
import CreatePostForm from "../../../../components/view/dashboard/post/create-post/CreatePostForm";

const CreatePost = () => {
    return (
        <StyledCreatePost>
            <Header />
            <main>
                <CreatePostForm />
            </main>
            <Footer />
        </StyledCreatePost>
    )
}

export default CreatePost