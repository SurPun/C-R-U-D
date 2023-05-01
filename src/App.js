// Styles
import './App.css';

// React
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components / Pages
import NavBar from "./components/NavBar";

import Home from './pages/Home';
import Form from './pages/Form';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
        <h1>A Simple C.R.U.D Application</h1>
          
        <BrowserRouter>
          <NavBar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<Form />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
