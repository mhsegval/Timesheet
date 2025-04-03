import React from 'react';
import './features.css';

const Features = () => {
  return (
    <section className="features-section">
      <div className="container">
        <h2 className="features-heading">Streamline Your Workday</h2>
        <div className="features-grid">
          {/* Feature Card 1 */}
          <div className="feature-card">
            <div className="card-icon">
              <i className="bi bi-stopwatch"></i>
            </div>
            <h3 className="card-title">Effortless Time Tracking</h3>
            <p className="card-description">
              <span className="blue-text">One-click timers</span> and 
              <span className="grey-text"> automatic tracking</span> ensure 
              <span className="blue-text"> accurate records</span> without disrupting your workflow.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="feature-card">
            <div className="card-icon">
              <i className="bi bi-bar-chart"></i>
            </div>
            <h3 className="card-title">Smart Analytics</h3>
            <p className="card-description">
              <span className="blue-text">Visual reports</span> help you 
              <span className="grey-text"> understand productivity patterns</span> and 
              <span className="blue-text"> optimize your time</span>.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="feature-card">
            <div className="card-icon">
              <i className="bi bi-phone"></i>
            </div>
            <h3 className="card-title">Mobile Freedom</h3>
            <p className="card-description">
              <span className="blue-text">Track anywhere</span> with our 
              <span className="grey-text"> iOS and Android apps</span>. Time syncs 
              <span className="blue-text"> across all devices</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;