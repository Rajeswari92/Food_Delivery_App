import { createRoot } from 'react-dom/client'; // Only one import of createRoot
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import StoreContextProvider from './context/StoreContext.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter
    future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    }}
  >
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </BrowserRouter>
);
