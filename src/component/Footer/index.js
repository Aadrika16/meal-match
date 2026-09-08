import React, { useState } from 'react';
import './index.css';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    setEmail('');
  };

  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Brand & Socials Column */}
        <div className="footer-brand-col">
          <a href="#home" className="footer-logo">
            <img 
              src="https://i.postimg.cc/FRjYWh8K/mealmatch-logo.jpg" 
              alt="Meal Match logo" 
              loading="lazy" 
            />
            <span>MEAL MATCH</span>
          </a>
          <p className="footer-tagline">Meals made to match you.</p>

          <div className="footer-socials">
            <a href="#home" aria-label="Instagram" className="social-icon-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </a>
            <a href="#home" aria-label="Facebook" className="social-icon-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="#home" aria-label="Twitter" className="social-icon-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a href="#home" aria-label="YouTube" className="social-icon-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                <polygon points="10 15 15 12 10 9 10 15" fill="currentColor"></polygon>
              </svg>
            </a>
          </div>
        </div>

        {/* Explore Links Column */}
        <nav className="footer-nav-col">
          <p className="footer-eyebrow">EXPLORE</p>
          <ul className="footer-links">
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#meal-plans">Meal Plans</a></li>
            <li><a href="#why-match">Nutrition</a></li>
            <li><a href="#home">About Us</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#home">Contact</a></li>
          </ul>
        </nav>

        {/* Newsletter Column */}
        <div className="footer-newsletter-col">
          <p className="footer-eyebrow">NEWSLETTER</p>
          <h3 className="newsletter-title">Get Smarter About Your Food.</h3>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input 
              type="email" 
              required 
              placeholder="you@email.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="newsletter-input" 
            />
            <button type="submit" className="newsletter-submit-btn">
              Join the Match 
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Sub-Footer */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>© 2026 Meal Match. Your goals. Your macros. Your Meal Match.</p>
          <p>Nutrition estimates are guidance, not medical advice.</p>
        </div>
      </div>
    </footer>
  );
}