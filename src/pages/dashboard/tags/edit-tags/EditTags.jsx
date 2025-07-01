import React from "react";
import { StyledEditTags } from "./EditTags.styles";
import Header from "../../../../components/common/header/Header";
import Footer from "../../../../components/common/footer/Footer";
import TagsEditForm from "../../../../components/view/dashboard/tags/update-form/TagsEditForm";


const EditTags = () => {
    return (
        <StyledEditTags>
            <Header/>
            <main>
                <TagsEditForm/>
            </main>
            <Footer/>
        </StyledEditTags>
    )
};

export default EditTags