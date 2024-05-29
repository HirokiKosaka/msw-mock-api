import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './ApiSample';

if (import.meta) {
 const { worker } = await import("./mocks/browser.ts");
 worker.start();
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);