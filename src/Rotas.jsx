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
import PostPanel from './pages/dashboard/posts/PostPanel';
import RolePanel from './pages/dashboard/roles/RolePanel';
import UserPanel from './pages/dashboard/user/UserPanel';
import TagsPanel from './pages/dashboard/tags/TagsPanel';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Rotas = () => {
	return (
		<BrowserRouter>
			<GlobalStyle />
			<ThemeProvider theme={theme}>

				<ToastContainer 
					position="top-right"
					autoClose={3000}
					hideProgressBar={false}
					closeOnClick
					pauseOnHover
					theme="dark"
				/>

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
					<Route path='dashboard/post/:action' element={<PostPanel />} />
					<Route path='dashboard/user/:action' element={<UserPanel />} />
					<Route path='dashboard/roles/:action' element={<RolePanel />} />
					<Route path='dashboard/tags/:action' element={<TagsPanel />} />
				</Routes>

			</ThemeProvider>
		</BrowserRouter>
	)
}

export default Rotas;
