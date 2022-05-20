import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import{MoralisProvider} from "react-moralis"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MoralisProvider serverUrl="https://mfru2adalokz.usemoralis.com:2053/server" appId="ZuUCsIyOnuHT5UAvFT0HXwMD1VpDUaze8yceyKGu">
      <App />
    </MoralisProvider>
  </React.StrictMode>   
);

