import React, { Fragment } from "react";
import "./footer.css";
const Footer = () => {
  return (
    <Fragment>
      <div className="footer">
        <div className="container">
          <div className="col-12 col-sm-12 bottomBar">
            <a href="https://twitter.com/coolmanuniverse">
              <i className="fab fa-twitter"></i>
            </a>{" "}
            <a href="http://discord.gg/cmuniverse">
              <i className="fab fa-discord"></i>
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
