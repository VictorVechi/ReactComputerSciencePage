import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Rotas from './Rotas.jsx'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Rotas />
	</StrictMode>,
)
