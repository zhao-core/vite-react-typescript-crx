import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/common/styles/frame.styl'
import Popup from '@/popup'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
);
