import React from 'react'
import "../../styles/content.css";

const Content = () => {
  return (
<>

      {/* Hero section */}
      <section className="hero-section">
        <div className="hero-section-text">
          <h1 className="hero-section-title">Save with greater parameters and discipline</h1>
          <p className="hero-section-description">SaveMate helps you manage your finances by setting saving goals and tracking your progress with a disciplined approach. </p>
          <a href="#" className="hero-section-button">Get started</a>
        </div>
        <img className="hero-section-image" src="https://i2.cdn.turner.com/money/dam/assets/151202114058-illustration-savings-retirement-540x304.jpg" alt="Hero section image" />
      </section>

      {/* Features section */}
      <section className="features-section">
        <div className="features-section-text">
          <h2 className="features-section-title">Features</h2>
          <p className="features-section-description">SaveMate has the following features to help you save with greater ease:</p>
          <ul className="features-section-list">
            <li className="features-section-list-item">
              <i className="features-section-list-icon fas fa-check"></i>
              <span className="features-section-list-text">Goal Setting: Set up goals and SaveMate will help you achieve them</span>
            </li>
            <li className="features-section-list-item">
              <i className="features-section-list-icon fas fa-check"></i>
              <span className="features-section-list-text">Automatic Savings: Automatically transfer money to your saving goals from your account</span>
            </li>
            <li className="features-section-list-item">
              <i className="features-section-list-icon fas fa-check"></i>
              <span className="features-section-list-text">Tracking and Notifications: Track your progress and get notified when you reach your goals</span>
            </li>
          </ul>
        </div>
        <img className="features-section-image" src="https://www.phroogal.com/wp-content/uploads/2020/10/Multiple-Savings-Goals-with-Rules-Based-Triggers-Qapital-Goals.jpg" alt="Features section image" />
      </section>

      {/* CTA section */}
      <section className="cta-section">
        <h2 className="cta-section-title">Ready to start saving with ease?</h2>
        <a href="#" className="cta-section-button">Get started</a>
      </section>
      </>
);
}

  

export default Content