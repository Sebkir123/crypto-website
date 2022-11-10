import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import "./Footer.css";

import { Link } from "react-scroll";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="logo">
            <h1 className="primary">CRYPTO</h1>
          </div>
          <Link
            activeClass="active"
            to="top"
            spy={true}
            smooth={true}
            duration={500}
          >
            <BsFillArrowUpCircleFill className="icon" />
          </Link>
        </div>
        <div className="col-container">
          <div className="col">
            <h5>Support</h5>
            <ul>
              <li>
                {/* TODO: aim to avoid href as it will reload the entire app then trigerring useEffects
                to run when it is not needed which could impact the app performance */}
                <a href="/">Chat</a>
              </li>
              <li>
                <a href="/">Contact Us</a>
              </li>
              <li>
                <a href="/">Support</a>
              </li>
              <li>
                <a href="/">FAQ</a>
              </li>
            </ul>
          </div>

          <div className="col">
            <h5>Developers</h5>
            <ul>
              <li>
                <a href="/">API</a>
              </li>
              <li>
                <a href="/">Code</a>
              </li>
              <li>
                <a href="/">Cloud</a>
              </li>
              <li>
                <a href="/">Tech-Stack</a>
              </li>
            </ul>
          </div>

          <div className="col">
            <h5>Company</h5>
            <ul>
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">Information</a>
              </li>
              <li>
                <a href="/">Legal</a>
              </li>
              <li>
                <a href="/">Privacy</a>
              </li>
            </ul>
          </div>

          <div className="col">
            <h5>Social</h5>

            <a href="/">
              <FaFacebook className="icon" />
            </a>
            <a href="/">
              <FaLinkedin className="icon" />
            </a>
            <a href="/">
              <FaTwitter className="icon" />
            </a>
            <a href="/">
              <FaGithub className="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
