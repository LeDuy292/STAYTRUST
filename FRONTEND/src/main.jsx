import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// QUAN TRỌNG: Import file global css chứa Tailwind directives
import './styles/global.css'

// Force dark mode
document.documentElement.classList.add('dark');

import { AuthProvider } from './context/AuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
)