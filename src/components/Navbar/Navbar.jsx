import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container-fluid">
        {/* Brand/Logo */}
        <a className="navbar-brand" href="/">
          <span className="brand-highlight">Time</span> Sheet
        </a>

        {/* Mobile Menu Button */}
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Content - collapses on mobile */}
        <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`} id="navbarContent">
          {/* Main Navigation - centered on mobile */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-center">
            <li className="nav-item">
              <a className="nav-link active" href="/time-tracking">
                <i className="bi bi-clock me-2"></i>
                Time Tracking
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/reports">
                <i className="bi bi-pie-chart me-2"></i>
                Reports
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/team">
                <i className="bi bi-people me-2"></i>
                Team
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/invoicing">
                <i className="bi bi-file-earmark-text me-2"></i>
                Invoicing
              </a>
            </li>
          </ul>

          {/* Right-aligned items with tooltips */}
          <ul className="navbar-nav ms-auto">
            <li className="nav-item" data-bs-toggle="tooltip" title="Settings">
              <a className="nav-link" href="/settings">
                <i className="bi bi-gear"></i>
                <span className="d-lg-none ms-2">Settings</span>
              </a>
            </li>
            <li className="nav-item" data-bs-toggle="tooltip" title="Help Center">
              <a className="nav-link" href="/help">
                <i className="bi bi-question-circle"></i>
                <span className="d-lg-none ms-2">Help</span>
              </a>
            </li>
            <li className="nav-item" data-bs-toggle="tooltip" title="Notifications">
              <a className="nav-link position-relative" href="/notifications">
                <i className="bi bi-bell"></i>
                <span className="notification-badge">3</span>
                <span className="d-lg-none ms-2">Notifications</span>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle" 
                href="#" 
                id="userDropdown" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
                title="User Profile"
              >
                <i className="bi bi-person-circle me-1"></i>
                <span>John Doe</span>
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                <li><a className="dropdown-item" href="/profile">Profile</a></li>
                <li><a className="dropdown-item" href="/settings">Settings</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="/logout">Logout</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;