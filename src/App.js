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
        
        <div className="Container">
          <p className="Info">
            A CRUD application is a software program that allows users to perform four basic operations: Create, Read, Update, and Delete. These operations are often referred to as CRUD, which stands for:
          </p>
          <ul className="CrudList">
            <li>Create: Add new records or data entries.</li>
            <li>Read: Retrieve and display existing records or data entries.</li>
            <li>Update: Modify or edit existing records or data entries.</li>
            <li>Delete: Remove records or data entries.</li>
          </ul>
        </div>

    </div>
  );
}

export default App;
