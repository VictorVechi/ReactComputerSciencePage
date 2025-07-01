import React from "react";
import { StyledUpdatePost } from "./updatePost.styles";
import Header from "../../../../components/common/header/Header";
import Footer from "../../../../components/common/footer/Footer";
import PostUpdateForm from "../../../../components/view/dashboard/post/update-post/PostUpdateForm";

const UpdatePost = () => {
    return (
        <StyledUpdatePost>
            <Header />
            <main>
                <PostUpdateForm />
            </main>
            <Footer />
        </StyledUpdatePost>
    );
};

export default UpdatePost;
