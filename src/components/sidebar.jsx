// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar({ onSelect }) {
  return (
    <div className="bg-success p-3" style={{ height: '100vh' }}>
      <ul className="nav flex-column">
        <li className="nav-item">
        <Link className="btn btn-link text-white" to="/dashboard">
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <button className="btn btn-link text-white" onClick={() => alert("Logged out!")}>
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
