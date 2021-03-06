import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import Counter from './Components/Counter.js';
import InputExample from './Components/InputExample.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Counter />
    <InputExample />
  </React.StrictMode>
);

