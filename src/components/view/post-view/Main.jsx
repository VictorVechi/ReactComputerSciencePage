import React from "react";
import { StyledMainPostView } from "./main.styles";
import PostDetails from "./post-details/PostDetails";

const MainPostView = () => {
    return (
        <StyledMainPostView>
            <PostDetails />
        </StyledMainPostView>
    );
}
export default MainPostView