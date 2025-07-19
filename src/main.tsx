import App from './App';
import '@/styles/global.css';

import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename={'/cgn_intergration_exported'}>
    <App />
  </BrowserRouter>
);
