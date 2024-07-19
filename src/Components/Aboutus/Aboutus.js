import React from "react";
import { Link } from "react-router-dom";
import "./Aboutus.css";

function Aboutus() {
  return (
    <div className="aboutus-container">
      <h1 className="page-title">About Us</h1>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/home" className="nav-link">
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
      <div className="company-overview">
        <h2>Company Overview</h2>
        <p>
          Tirupathi Traders has been empowering traders around the world since
          2010. We provide state-of-the-art tools and resources to help you
          succeed in the financial markets.
        </p>
      </div>
      <div className="mission-statement">
        <h2>Our Mission</h2>
        <p>
          Our mission is to democratize access to the financial markets by
          providing advanced trading tools, real-time data, and comprehensive
          educational resources to traders of all levels.
        </p>
      </div>
      <div className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-container">
          <div className="team-member">
            <img src="team1.jpg" alt="Team Member 1" className="team-photo" />
            <h3>Jane Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <img src="team2.jpg" alt="Team Member 2" className="team-photo" />
            <h3>John Smith</h3>
            <p>Chief Technical Officer</p>
          </div>
          <div className="team-member">
            <img src="team3.jpg" alt="Team Member 3" className="team-photo" />
            <h3>Mary Johnson</h3>
            <p>Head of Marketing</p>
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
    </div>
  );
}

export default Aboutus;
