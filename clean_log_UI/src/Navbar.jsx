import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</Link></li>
        <li><Link to="/regex-management" className={({ isActive }) => (isActive ? 'active' : '')}>Regex Management</Link></li>
        <li><Link to="/LogProcessor" className={({ isActive }) => (isActive ? 'active' : '')}>LogProcessor</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
