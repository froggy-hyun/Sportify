import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { registerSW } from 'virtual:pwa-register';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  // </StrictMode>

  <App />
);
// 서비스 워커 등록

if ('serviceWorker' in navigator) {
  registerSW(); // 서비스 워커 등록
}
