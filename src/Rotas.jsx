import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyle.styles';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { theme } from './styles/theme';
import Home from './pages/home/Home';


const Rotas = () => {
	return (
		<BrowserRouter>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Routes>
					<Route path="/vite" element={<App/>} />
					<Route path="/" element={<Home/>} />
				</Routes>
			</ThemeProvider>
		</BrowserRouter>
	)
}

export default Rotas;