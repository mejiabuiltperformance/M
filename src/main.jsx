import React from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'

function App() {
  return (
    <div style={{
      background:'black',
      color:'white',
      height:'100vh',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      fontSize:'40px'
    }}>
      MEJIA BUILT PERFORMANCE
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
