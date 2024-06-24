import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className="footer">
        {/* <div className="line"></div> */}
        {/* <div className="footer-content">
            <span></span><span></span><span></span>
        </div> */}
    <div class="footer-container">
        <div class="footer-about">
            <h3>About Us</h3>
            <p>We are a state-of-the-art gym offering a variety of fitness classes, personal training, and top-notch equipment to help you achieve your fitness goals.</p>
        </div>
        <div class="footer-links">
            <h3>Quick Links</h3>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#classes">Classes</a></li>
                <li><a href="#trainers">Trainers</a></li>
                <li><a href="#membership">Membership</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
        <div class="footer-contact">
            <h3>Contact Us</h3>
            <p>Addis Ababa, Ethiopia</p>
            <p>Email: samueltilahun991@gmail.com</p>
            <p>Phone: +251977054500</p>
        </div>
        <div class="footer-social">
            <h3>Follow Us</h3>
            <a href="https://www.facebook.com" target="_blank">Facebook</a>
            <a href="https://www.twitter.com" target="_blank">Twitter</a>
            <a href="https://www.instagram.com" target="_blank">Instagram</a>
        </div>
    </div>
  <div class="footer-bottom">
    <p>&copy; 2024 Our Gym. All Rights Reserved. Developed by Samuel Tilahun.</p>
  </div>
    </div>
  )
}

export default Footer