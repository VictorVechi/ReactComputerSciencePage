import React from "react";
import { StyledCreatePost } from "./createPost.styles";
import CreatePostMain from "../../components/view/dashboard/create-post/CreatePostMain";
import Header from "../../components/common/header/Header";
import Footer from "../../components/common/footer/Footer";

const CreatePost = () => {
    return (
        <StyledCreatePost>
            <Header />
            <main>
                <CreatePostMain />
            </main>
            <Footer />
        </StyledCreatePost>
    )
}

export default CreatePost