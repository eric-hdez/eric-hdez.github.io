import React from 'react';
import { createRoot } from 'react-dom/client';
import { Portfolio } from './Portfolio';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as Element);

root.render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>,
);
