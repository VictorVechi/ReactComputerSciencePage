import React from "react";
import Header from "../../components/common/header/Header";
import Footer from "../../components/common/footer/Footer";
import MainSearchResult from "../../components/view/search-results/Main";
import { StyledPostSearch } from "./postSearch.styles";

const PostSearch = () => {
    return (
        <StyledPostSearch>
            <Header />
            <main>
                <MainSearchResult />
            </main>
            <Footer />
        </StyledPostSearch>
    );
};

export default PostSearch