import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './navbar.css';
import Navbar from './Navbar';
import Home from './Home';
import AddRegex from './AddRegex';
import UpdateRegex from './UpdateRegex';
import RegexManagement from './RegexManagement';  // Assuming you have a table to show rules
import LogProcessor from './LogProcessor';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-regex" element={<AddRegex />} />
            <Route path="/update-regex/:id" element={<UpdateRegex />} />
            <Route path="/regex-management" element={<RegexManagement />} />
            <Route path="logprocessor" element={<LogProcessor/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
