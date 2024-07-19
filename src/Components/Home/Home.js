import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <h1 className="page-title">Welcome to Tirupathi Traders</h1>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/aboutus" className="nav-link">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contactus" className="nav-link">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
      <div className="intro-section">
        <p>
          Trade stocks, options, and futures with our advanced trading platform.
        </p>
        <p>Get real-time data, in-depth analysis, and world-class support.</p>
      </div>
      <div className="features-section">
        <h2>Why Trade With Us?</h2>
        <ul>
          <li>Low Commission Rates</li>
          <li>Advanced Trading Tools</li>
          <li>24/7 Customer Support</li>
          <li>Educational Resources</li>
          <li>Secure and Reliable</li>
        </ul>
      </div>
      <div className="market-highlights">
        <h2>Market Highlights</h2>
        <div className="highlights-container">
          <div className="highlight">
            <h3>Stock Market</h3>
            <p>Latest trends and movements in the stock market.</p>
          </div>
          <div className="highlight">
            <h3>Crypto Market</h3>
            <p>Up-to-date information on cryptocurrency prices.</p>
          </div>
          <div className="highlight">
            <h3>Commodities</h3>
            <p>Key insights into commodities trading.</p>
          </div>
        </div>
      </div>
      <div className="testimonials-section">
        <h2>What Our Users Say</h2>
        <div className="testimonial">
          <p>
            "This platform has revolutionized the way I trade. The tools and
            support are unparalleled!" - Alex J.
          </p>
        </div>
        <div className="testimonial">
          <p>
            "I love the educational resources. I've learned so much and improved
            my trading strategies." - Maria K.
          </p>
        </div>
      </div>
      <div className="cta-section">
        <h2>Join Us Today!</h2>
        <p>Sign up now and get a welcome bonus on your first deposit.</p>
        <Link to="/signup" className="cta-button">
          Sign Up
        </Link>
      </div>
      <footer className="footer">
        <p>&copy; 2024 Tirupathi Traders. All rights reserved.</p>
        <p>
          <Link to="/privacy" className="footer-link">
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link to="/terms" className="footer-link">
            Terms of Service
          </Link>
        </p>
      </footer>
    </div>
  );
}

export default Home;
