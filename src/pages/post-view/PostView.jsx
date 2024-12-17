import React from "react";
import { StyledPostView } from "./postView.styles";
import MainPostView from "../../components/view/post-view/Main";
import Header from "../../components/common/header/Header";
import Footer from "../../components/common/footer/Footer";

const PostView = () => {
    return (
        <StyledPostView>
            <Header />
            <main>
                <MainPostView />
            </main>
            <Footer />
        </StyledPostView>
    );
}
export default PostView