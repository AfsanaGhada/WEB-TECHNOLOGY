import React from 'react';

function Sidebar() {
  return (
    <div className="sidebar bg-primary text-white p-3" style={{ width: '200px' }}>
      <ul className="nav flex-column">
        <li className="nav-item">
          <a href="#home" className="nav-link text-white">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#services" className="nav-link text-white">
            Services
          </a>
        </li>
        <li className="nav-item">
          <a href="#about" className="nav-link text-white">
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="#contact" className="nav-link text-white">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
