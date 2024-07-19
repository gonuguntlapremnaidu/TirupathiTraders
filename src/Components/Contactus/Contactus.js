import React from "react";
import { Link } from "react-router-dom";
import "./Contactus.css";

function Contactus() {
  return (
    <div className="contactus-container">
      <h1 className="page-title">Contact Us</h1>
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
      <div className="contact-details">
        <h2>Get in Touch</h2>
        <p>Email: support@tirupathitraders.com</p>
        <p>Phone: 123-456-7890</p>
        <h2>Office Address</h2>
        <p>123 Market Street, Suite 100</p>
        <p>Trading City, TC 12345</p>
      </div>
      <form className="contact-form">
        <h2>Contact Form</h2>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Message:
          <textarea name="message" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contactus;
