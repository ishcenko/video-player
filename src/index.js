import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Player } from 'components/Player/Player';
import { GlobalStyle } from 'GlobalStyled';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle>
      <Player />
    </GlobalStyle>
  </React.StrictMode>
);
