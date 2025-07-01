import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyle.styles';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import ProtectedRoute from './service/security/protectedRoute';
import PostSearch from './pages/post-search/PostSearch';
import PostView from './pages/post-view/PostView';
import QuemSomos from './pages/quem-somos/QuemSomos';
import CreatePost from './pages/dashboard/create-post/CreatePost';
import RolePanel from './pages/dashboard/roles/RolePanel';
import UserPanel from './pages/dashboard/user/UserPanel';
import TagsPanel from './pages/dashboard/tags/TagsPanel';


const Rotas = () => {
	return (
		<BrowserRouter>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Routes>
					<Route path="" element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/teste' element={<Dashboard />} />
					<Route path='/quem-somos' element={<QuemSomos />} />
					<Route path="/post/:id" element={<PostView />} />
					<Route
                        path="/dashboard"
                        element={<ProtectedRoute element={Dashboard} />}
                    />
					<Route path='/search' element={<PostSearch />} />
					<Route path='dashboard/create-post' element={<CreatePost />} />
					<Route path='dashboard/user/:action' element={<UserPanel />} />
					<Route path='dashboard/roles/:action' element={<RolePanel />} />
					<Route path='dashboard/tags/:action' element={<TagsPanel />} />
				</Routes>
			</ThemeProvider>
		</BrowserRouter>
	)
}

export default Rotas;