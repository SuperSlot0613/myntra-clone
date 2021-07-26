import React from "react";
import "../CSS/MenuSlider.css";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import ContactSupportOutlinedIcon from "@material-ui/icons/ContactSupportOutlined";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";

function MenuSlider() {
  const list = document.querySelectorAll('.list');

  const activeLink = (e) => {
    list.forEach((item) => item.classList.remove('active'))
    this.classList.add('active')
  };

  list.forEach((item) => item.addEventListener('click', activeLink));

  return (
    <div className="menuslider">
      <div className="navigation">
        <ul>
          <li className="list active">
            <a href="#">
              <span className="icon">
                <HomeOutlinedIcon className="icon-icon" />
              </span>
              <span className="title">Home</span>
            </a>
          </li>
          <li className="list">
            <a href="#">
              <span className="icon">
                <PersonOutlineOutlinedIcon className="icon-icon" />
              </span>
              <span className="title">Profile</span>
            </a>
          </li>
          <li className="list">
            <a href="#">
              <span className="icon">
                <ModeCommentOutlinedIcon className="icon-icon" />
              </span>
              <span className="title">Message</span>
            </a>
          </li>
          <li className="list">
            <a href="#">
              <span className="icon">
                <SettingsOutlinedIcon className="icon-icon" />
              </span>
              <span className="title">Setting</span>
            </a>
          </li>
          <li className="list">
            <a href="#">
              <span className="icon">
                <ContactSupportOutlinedIcon className="icon-icon" />
              </span>
              <span className="title">Help</span>
            </a>
          </li>
          <li className="list">
            <a href="#">
              <span className="icon">
                <LockOutlinedIcon className="icon-icon" />
              </span>
              <span className="title">Password</span>
            </a>
          </li>
          <li className="list">
            <a href="#">
              <span className="icon">
                <ExitToAppOutlinedIcon className="icon-icon" />
              </span>
              <span className="title">Sign Out</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MenuSlider;
