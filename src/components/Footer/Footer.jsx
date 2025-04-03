import React from 'react';
import './footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer>
      {/* Main Footer Section */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-content">
            {/* Navigation Links */}
            <div className="footer-nav">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="/time-tracking">Time Tracking</a></li>
                <li><a href="/reports">Reports</a></li>
                <li><a href="/team">Team</a></li>
                <li><a href="/invoicing">Invoicing</a></li>
              </ul>
            </div>

            {/* Social Media Icons */}
            <div className="footer-social">
              <h4>Connect With Us</h4>
              <div className="social-icons">
                <a href="#"><i className="bi bi-facebook"></i></a>
                <a href="#"><i className="bi bi-twitter"></i></a>
                <a href="#"><i className="bi bi-linkedin"></i></a>
                <a href="#"><i className="bi bi-instagram"></i></a>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="footer-actions">
              <div className="footer-buttons">
                <a href="/login" className="btn btn-login">Login</a>
                <a href="/register" className="btn btn-register">Register</a>
              </div>
              <button className="back-to-top" onClick={scrollToTop}>
                <i className="bi bi-arrow-up"></i> Back to Top
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-copyright">
        <div className="container">
          <p>Developed and maintained by <a href="https://itrtechsystems.com/" target="_blank" rel="noopener noreferrer">ITR Consulting</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;