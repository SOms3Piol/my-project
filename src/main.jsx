import React, { useContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CartContextProvider from './context/cartContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </React.StrictMode>,
)
