import React from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import hero from './C1A60692-FC46-4E2C-840E-C05496E3D9FC.png'

function App() {
  return (
    <main>
      <section className="hero" id="home" style={{ backgroundImage: `url(${hero})` }}>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#builds">Builds</a>
          <a href="#services">Services</a>
        </nav>

        <div className="heroText">
          <h1>MEJIA BUILT PERFORMANCE</h1>
          <p>Street built. No excuses.</p>
        </div>
      </section>

      <section id="builds" className="section">
        <h2>Builds</h2>
        <p>FBO setups, cam packages, street cars, and roll-racing builds.</p>
      </section>

      <section id="services" className="section">
        <h2>Services</h2>
        <p>Headers, exhaust, cam installs, diagnostics, performance upgrades.</p>
      </section>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<App />)
