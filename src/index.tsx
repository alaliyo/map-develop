import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './Router';
import { createGlobalStyle } from 'styled-components';

const BodyStyle = createGlobalStyle`
  body {
    margin: 0;
    padding-top: 67px;
  }
`

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BodyStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
);


