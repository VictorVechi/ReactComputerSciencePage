import React from "react";
import { StyledDeletePost } from "./deletePost.styles";
import Header from "../../../../components/common/header/Header";
import Footer from "../../../../components/common/footer/Footer";
import PostDeleteForm from "../../../../components/view/dashboard/post/delete-post/PostDeleteForm";

const DeletePost = () => {
    return (
        <StyledDeletePost>
            <Header />
            <main>
                <PostDeleteForm />
            </main>
            <Footer />
        </StyledDeletePost>
    );
};

export default DeletePost;
