import { useState } from 'react'
import { Header } from './Header'
import { LandmarksPage } from './LandmarksPage'
import { Footer } from './Footer'
import './App.css'
import { Outlet } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ textAlign: 'center' }}>
      <Header />
      <main>
        {/* Outlet renders the matching child route component from main.jsx */}
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App