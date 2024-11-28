import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyle.styles';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import Home from './pages/home/Home';
import Login from './pages/login/Login';


const Rotas = () => {
	return (
		<BrowserRouter>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Routes>
					<Route path="" element={<Home/>} />
					<Route path='/login' element={<Login />} />
				</Routes>
			</ThemeProvider>
		</BrowserRouter>
	)
}

export default Rotas;