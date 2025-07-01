import React from "react";
import { StyledDeleteTag } from "./deleteTags.styles.js";
import Header from "../../../../components/common/header/Header";
import Footer from "../../../../components/common/footer/Footer";
import TagDeleteForm from "../../../../components/view/dashboard/tags/delete-form/TagsDeleteForm.jsx";

const DeleteTag = () => {
    return (
        <StyledDeleteTag>
            <Header />
            <main>
                <TagDeleteForm />
            </main>
            <Footer />
        </StyledDeleteTag>
    )
}

export default DeleteTag;