import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyle.styles';
import { ThemeProvider } from 'styled-components';
import { App } from './App';


const Rotas = () => {
	return (
		<BrowserRouter>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Routes>
					<Route path="/" element={App} />
				</Routes>
			</ThemeProvider>
		</BrowserRouter>
	)
}

export default Rotas;