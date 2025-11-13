import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Rotas from './Rotas.jsx'
import './service/gateway/interceptors';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Rotas />
	</StrictMode>,
)

window.addEventListener('storage', (e) => {
  if (e.key === 'jwtToken' && e.newValue === null) {
    if (window.location.pathname !== '/login') {
      window.location.href = '/login';
    }
  }
});
