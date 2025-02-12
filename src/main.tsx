import App from './App';
import '@/styles/global.css';

import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Context from './contexts/Context';

createRoot(document.getElementById('root')!).render(
  <Context>
    <BrowserRouter basename={import.meta.env.VITE_PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </Context>
);
