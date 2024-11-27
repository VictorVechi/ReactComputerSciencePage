import React from 'react'
import { StyleMain } from './main.styles'
import PostsSection from '../posts-section/Posts-section';
import Search from '../search/Search';
import StudentSection from '../student-section/StudentSection';

const Main = () => {
    return (
        <StyleMain>
            <Search />
            <StudentSection />
            <PostsSection />
        </StyleMain>
    )
}; export default Main
