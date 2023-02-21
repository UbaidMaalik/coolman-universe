import React, { Fragment } from "react";
import "./banner.css";

const Banner = () => {
  return (
    <Fragment>
      <div className="banner">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-3 left">
              <img src="/images/lookdown.webp" />
            </div>
            <div className="col-12 col-sm-6 centerText">
              <h2>ADOPT YOUR OWN SPESH</h2>
              <p>10,000 Speshies surfing through the Universe 🪐 SOLD OUT</p>
              <button className="btn-banner">VIEW ON OPENSEA</button>
            </div>
            <div className="col-12 col-sm-3 right">
              <img src="/images/right.webp" />
            </div>
            <div className="col-12 col-sm-12 slid">
              <img src="/images/banner.gif" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Banner;
