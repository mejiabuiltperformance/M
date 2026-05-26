import React from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import hero from './C1A60692-FC46-4E2C-840E-C05496E3D9FC.png'

function App() {
  return (
    <main>
      <img className="heroImage" src={hero} alt="Mejia Built Performance" />
    </main>
  )
}

createRoot(document.getElementById('root')).render(<App />)
