import React, {createContext}from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const codeInfo = {
  name: 'code',
  age: 18,
};

const ShinCodeContext = createContext(codeInfo);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ShinCodeContext.Provider value={codeInfo}>
 <React.StrictMode>
    <App />
  </React.StrictMode>,
  </ShinCodeContext.Provider>
);

export default ShinCodeContext;
