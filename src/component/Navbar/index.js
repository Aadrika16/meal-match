import React, { useState, useEffect } from "react";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./index.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* Stop page scrolling while mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header
        className={`navbar-header ${
          isScrolled || isOpen ? "scrolled" : ""
        }`}
      >
        <div className="navbar-container">

          {/* LEFT - LOGO + BRAND */}
          <a
            href="#home"
            className="navbar-brand"
            onClick={closeMenu}
          >
            <div className="navbar-logo-icon">
              <img
                src="/logo/mealmatchlogo.png"
                alt="Meal Match Logo"
              />
            </div>

            <span className="navbar-title">
              MEAL MATCH
            </span>
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav className="navbar-links desktop-nav">
            <a href="#home">Home</a>
            <a href="#menu">Menu</a>
            <Link to="/meal-match-plans">Meal Plans</Link>
            <a href="#faq">FAQ</a>
          </nav>

          {/* RIGHT SIDE */}
          <div className="navbar-actions">

            {/* Desktop */}
            <button className="navbar-cta-btn desktop-action">
              Get Matched
            </button>

            <button
              className="navbar-profile-icon desktop-action"
              aria-label="User profile"
            >
              <FaUser />
            </button>

            {/* MOBILE HAMBURGER */}
            <button
              className="navbar-hamburger"
              onClick={toggleMenu}
              aria-label="Toggle navigation"
              aria-expanded={isOpen}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>

          </div>
        </div>
      </header>

      {/* MOBILE BACKDROP */}
      <div
        className={`mobile-menu-overlay ${
          isOpen ? "active" : ""
        }`}
        onClick={closeMenu}
      />

      {/* MOBILE RIGHT SIDE DRAWER */}
      <div
        className={`mobile-menu-drawer ${
          isOpen ? "active" : ""
        }`}
      >

        <div className="mobile-drawer-header">
          <span>Menu</span>

          <button
            className="mobile-close-btn"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>

        <nav className="mobile-nav-links">

          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#menu" onClick={closeMenu}>
            Menu
          </a>

          <Link to="/meal-match-plans" onClick={closeMenu}>
            Meal Plans
          </Link>

          <a href="#faq" onClick={closeMenu}>
            FAQ
          </a>

        </nav>

        <div className="mobile-menu-actions">

          <button className="mobile-get-matched">
            Get Matched
          </button>

         {/* <button className="mobile-profile-btn">
            <FaUser />
            <span>My Account</span>
          </button> */}

        </div>

      </div>
    </>
  );
};

export default Navbar;