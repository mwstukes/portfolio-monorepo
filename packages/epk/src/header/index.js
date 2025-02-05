import React, { useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { logotext, socialProfiles } from "../content_option";

const HeaderMain = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between">
          <Link className="navbar-brand nav_ac" to="/">
            {logotext}
          </Link>
          <div className="d-flex align-items-center">
            <button className="menu__button  nav_ac" onClick={handleToggle}>
              {!isActive ? <VscClose /> : <VscGrabber />}
            </button>
          </div>
        </div>
        <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <ul className="the_menu">
                  <li className="menu_item ">
                  <Link onClick={handleToggle} to="/" className="my-3">Home</Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/releases" className="my-3">Releases</Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/remixes" className="my-3">Remixes & VA's</Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/mixes" className="my-3">Mixes</Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/events" className="my-3">Events</Link>
                  </li>
                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/about" className="my-3">About</Link>
                  </li>
                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/contact" className="my-3">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
            <div className="d-flex">
              <a href={socialProfiles.bandcamp} target="_blank" rel="noopener noreferrer">Bandcamp</a>
              <a href={socialProfiles.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href={socialProfiles.soundcloud} target="_blank" rel="noopener noreferrer">SoundCloud</a>
              <a href={socialProfiles.youtube} target="_blank" rel="noopener noreferrer">YouTube</a>
            </div>
            <p className="copyright m-0">copyright {logotext}</p>
          </div>
        </div>
      </header>
      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>
    </>
  );
};

export default HeaderMain;
