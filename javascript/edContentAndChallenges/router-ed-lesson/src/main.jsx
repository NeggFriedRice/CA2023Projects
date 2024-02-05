import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import Navbar from './pages/Navbar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/about" element={<Outlet />}>
        <Route path="/about/" element={<AboutPage />} />
        <Route path="/about/contact" element={<ContactPage />}/>
      </Route>
    </Routes>
  </BrowserRouter>
)
