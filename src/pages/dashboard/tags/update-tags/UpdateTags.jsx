import React from "react";
import { StyledUpdateTags } from "./updateTags.styles";
import Header from "../../../../components/common/header/Header";
import Footer from "../../../../components/common/footer/Footer";
import TagsUpdateForm from "../../../../components/view/dashboard/tags/update-form/TagsUpdateForm";


const UpdateTags = () => {
    return (
        <StyledUpdateTags>
            <Header/>
            <main>
                <TagsUpdateForm/>
            </main>
            <Footer/>
        </StyledUpdateTags>
    )
};

export default UpdateTags