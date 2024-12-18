import React from "react";
import { StyledMainPostView } from "./main.styles";
import PostDetails from "./post-details/PostDetails";
import SidebarLeft from "./sidebar/sidebar-left/Sidebar";
import SidebarRight from "./sidebar/sidebar-right/Sidebar";

const MainPostView = () => {
    return (
        <StyledMainPostView>
            <SidebarLeft />
            <PostDetails />
            <SidebarRight />
        </StyledMainPostView>
    );
}
export default MainPostView