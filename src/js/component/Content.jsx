import React from 'react'
import "../../styles/content.css";
import Jars from "../../img/savings.png"
import Piggy from "../../img/savers.png"
export{Jars,Piggy}

const Content = () => {
  return (
<>

      {/* Hero section */}
      <section className="hero-section">
        <div className="hero-section-text">
          <h1 className="hero-section-title">Save with greater parameters and discipline</h1>
          <p className="hero-section-description">PiggyVault helps you manage your finances by setting saving goals and tracking your progress with a disciplined approach. </p>
          <a href="#" className="hero-section-button">Get started</a>
        </div>
        <img className="hero-section-image" src={Piggy} alt="Hero section image" />
      </section>

      {/* Features section */}
      <section className="features-section">
        <div className="features-section-text">
          <h2 className="features-section-title">Features</h2>
          <p className="features-section-description">Piggy Vault has the following features to help you save with greater ease:</p>
          <ul className="features-section-list">
            <li className="features-section-list-item">
              <i className="features-section-list-icon fas fa-check"></i>
              <span className="features-section-list-text">Goal Setting: Set up goals and PiggyVault will help you achieve them</span>
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
        <img className="features-section-image" src={Jars} alt="Features section image" />
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