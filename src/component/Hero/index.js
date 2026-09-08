import React from "react";
import { FaArrowRight, FaCheck } from "react-icons/fa6";
import "./index.css";

const Hero = () => {
  return (
    <section className="hero-section">
      {/* Right-side background image */}
      <div className="hero-background" />

      {/* Gradient overlay */}
      <div className="hero-overlay" />

      <div className="hero-container">
        <div className="hero-content">
          {/* Small heading */}
          <p className="hero-eyebrow">
            PERSONALISED NUTRITION, MADE SIMPLE
          </p>

          {/* Main heading */}
          <h1 className="hero-title">
            Meals Made
            <br />
            to <span>Match You.</span>
          </h1>

          {/* Description */}
          <p className="hero-description">
            Tell us about your body, lifestyle and goals. We customize what you
            need and match you with meals customized according to your BMI.
          </p>

          {/* Tags */}
          <div className="hero-tags">
            <span>BMI-Based Meals</span>
            <span>Personalised Nutrition</span>
            <span>Macro-Friendly</span>
            <span>Freshly Prepared</span>
          </div>

          {/* Buttons */}
          <div className="hero-buttons">
            <button className="primary-btn">
              Get Your Meal Match
              <FaArrowRight />
            </button>

            <button className="secondary-btn">
              Explore the Menu
            </button>
          </div>

          {/* Bottom Benefits */}
          <div className="hero-benefits">
            <div>
              <FaCheck />
              <span>Know what's on your plate</span>
            </div>

            <div>
              <FaCheck />
              <span>No hidden calories</span>
            </div>

            <div>
              <FaCheck />
              <span>No confusing portions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;