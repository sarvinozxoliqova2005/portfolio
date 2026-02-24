import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutSection from './pages/AboutSection'

const App = () => {
  return (
   <BrowserRouter>
     <Routes>
      <Route path="/" element={<AboutSection />} />
      <Route path="/about" element={<AboutSection />} />
     </Routes>
   </BrowserRouter>
  )
}

export default App