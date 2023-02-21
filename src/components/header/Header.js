import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./header.css";
const Header = () => {
  return (
    <Fragment>
      <header className="main-header">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="#">
              <img src="/images/brand.svg" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <a href="#world" className="nav-item nav-link active">
                  WORLD <span className="sr-only">(current)</span>
                </a>
                <a href="#roadmap" className="nav-item nav-link">
                  ROADMAP
                </a>
                <a href="#faq" className="nav-item nav-link">
                  FAQ
                </a>
                <a href="#team" className="nav-item nav-link">
                  TEAM
                </a>
                <a to="#" className="nav-item nav-link">
                  COOLMAN <span className="sr-only">(current)</span>
                </a>
                <a
                  href="https://twitter.com/coolmanuniverse"
                  className="nav-item nav-link head-icon"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="http://discord.gg/cmuniverse"
                  className="nav-item nav-link head-icon"
                >
                  <i className="fab fa-discord"></i>
                </a>
                <a to="#" className="nav-item nav-link head-icon">
                  <img src="/images/icon.png" className="headerIcon" />
                </a>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
