import React from "react"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from "./pages/Home"
import Pricing from "./pages/Pricing"
import KeyFeature from "./pages/KeyFeature"
import Testimonials from "./pages/Testimonials"
import Demo from "./pages/Demo"
import NavBar from "./NavBar/Navbar"

import './App.css'

function App() {

  return (
    <>
      <div className="container">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/features" Component={KeyFeature} />
            <Route path="/pricing" Component={Pricing} />
            <Route path="/testimonials" Component={Testimonials} />
            <Route path="/demo" Component={Demo} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
