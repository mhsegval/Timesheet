import Features from "./components/Features/Features"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"

import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import Timetracker from "./pages/Timetracker/Timetracker"
import Team from "./pages/Team/Team"

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        
        <main>
          <Routes>
            {/* Home Page */}
            <Route path="/" element={
              <>
                <Hero />
                <Features />
              </>
            } />
            
            {/* Login Page */}
            <Route path="/login" element={<Login />} />
            
            {/* Registration Page */}
            <Route path="/register" element={<Register />} />
            
            <Route path="/team" element={<Team />} />

            <Route path="/time-tracking" element={<Timetracker />} />

          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
