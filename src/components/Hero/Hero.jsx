import React from 'react';
import './hero.css';
import heroImage from '../../assets/images/hero-image.jpg';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero-content">
              <h1>Track Time. Boost Productivity.</h1>
              <p className="hero-subtitle">
                The simplest way for your team to track work hours, manage projects, 
                and get paid for every minute worked.
              </p>
              <div className="hero-buttons">
                <a href="/login" className="btn btn-login">
                  Login
                </a>
                <a href="/register" className="btn btn-register">
                  Register
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-none d-lg-block">
            <div className="hero-image-container">
              <img src={heroImage} alt="Time tracking dashboard" className="hero-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;