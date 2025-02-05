import React from "react";
import "./style.css";
import {
  FaBandcamp,
  FaInstagram,
  FaRecordVinyl,
  FaSoundcloud,
  FaYoutube,
} from "react-icons/fa";
import { socialProfiles } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        <li>
          <a href={socialProfiles.bandcamp} target="_blank" rel="noopener noreferrer">
            <FaBandcamp />
          </a>
        </li>
        <li>
          <a href={socialProfiles.instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href={socialProfiles.ra} target="_blank" rel="noopener noreferrer">
            <FaRecordVinyl />
          </a>
        </li>
        <li>
          <a href={socialProfiles.soundcloud} target="_blank" rel="noopener noreferrer">
            <FaSoundcloud />
          </a>
        </li>
        <li>
          <a href={socialProfiles.youtube} target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
        </li>
      </ul>
    </div>
  );
};
