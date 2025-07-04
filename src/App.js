// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


import Sidebar from './components/sidebar';
import Navbar from './components/navbar';
import Dashboard from './components/dashboard';

function App() {
  const [searchItem,setSearchItem]=useState('');

  const onChangeSearchItem=(item)=>{
    setSearchItem(item);
  }
  return (
    <Router>
      <Navbar onChangeSearchItem={onChangeSearchItem} />
      <div className="d-flex">
        <div style={{ width: '200px' }}>
          <Sidebar />
        </div>
        <div className="p-3" style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard searchItem={searchItem} />} />
            {/* Add more routes here if needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
