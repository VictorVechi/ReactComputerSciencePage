import React from "react";
import { StyledCreateTags } from "./createTags.styles";
import Header from "../../../../components/common/header/Header";
import Footer from "../../../../components/common/footer/Footer";
import TagsCreateForm from "../../../../components/view/dashboard/tags/create-form/TagsCreateForm";

const CreateTags = () => {
    return (
        <StyledCreateTags>
            <Header />
            <main>
                <TagsCreateForm />
            </main>
            <Footer />
        </StyledCreateTags>
    )
};

export default CreateTags