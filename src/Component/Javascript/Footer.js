import React from "react";
import "../CSS/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_upper">
        <div className="footer_right">
          <div className="right_inner">
            <h4>MOST POPULER CATEGORIES</h4>
            <li>Staples</li>
            <li>Beverages</li>
            <li>Personal Care</li>
            <li>Home Care</li>
            <li>Fruits and Vegetables</li>
            <li>Baby Care</li>
            <li>Snacks & Branded Foods</li>
            <li>Dairy Bakery</li>
          </div>
        </div>
        <div className="footer_middle">
          <h4>CUSTOMER SERVICES</h4>
          <li>About Us</li>
          <li>FAQ</li>
          <li>Terms and conditions</li>
          <li>Privacy Policy</li>
          <li>E-waste Policy</li>
        </div>
        <div className="footer_left">
          <h4>CONTACT US</h4>
          <li>
            WhatsApp us :
            <span style={{ color: "blue", fontSize: "15px" }}>70003 70003</span>
          </li>
          <li>
            Call Us :
            <span style={{ color: "blue", fontSize: "15px" }}>
              {" "}
              1800 890 1222
            </span>
          </li>
          <li>6:00 AM to 8:00 PM, 365 days</li>
          <li>
            Should you encounter any bugs, glitches, lack of functionality,
            delayed deliveries, billing errors or other problems on the beta
            website, please email us on:{" "}
            <span style={{ color: "blue", fontSize: "15px" }}>
              saurabhyadav0613@gmail.com
            </span>
          </li>
          <h5>DOWNLOAD APP</h5>
          <img
            src="https://www.jiomart.com/images/cms/wysiwyg/app-icons/play_store.png"
            alt="Download App from playstore"
          />
          <img
            src="https://www.jiomart.com/images/cms/wysiwyg/app-icons/ios_store.png"
            alt="Download App from playstore"
          />
        </div>
      </div>
      <div className="footer_lower">
        <p> Copyright &copy; 2021.All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
