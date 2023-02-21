import React, { Fragment } from "react";
import "./roadmap.css";

const RoadMap = () => {
  return (
    <Fragment>
      <div className="roadmap" id="roadmap">
        <div className="container">
          <h2>ROADMAP</h2>
          <div className="row">
            <div className="col-12 col-sm-5 left-map">
              <h2>JANUARY</h2>
            </div>
            <div className="col-12 col-sm-6 right-map">
              <h3>Official Spesh “Ur Special” Toy</h3>
              <p>Limited Edition, available Jan 14th</p>
              <h3>Miami Mural</h3>
              <p>
                Our first ever mural featuring 3 of UR speshies from 3 different
                worlds located in Wynwood Art District ✨
              </p>
              <h3>Site update</h3>
              <p>It’s gonna look SICK 😳</p>
              <h3>Metalink Integration 👀👀</h3>
            </div>
            <div className="col-12 col-sm-1 left-map"></div>
            <div className="col-12 col-sm-5 left-map">
              <h2>FEBRUARY</h2>
            </div>
            <div className="col-12 col-sm-6 right-map">
              <h3>Coolman's Universe Merch Drop</h3>
              <p>
                Special discounts and exclusive items for Coolman’s Universe
                holders… because I love you 💕
              </p>
              <h3>Speshul Worlds Portal 🌌</h3>
              <p>Exclusive speshie holder access</p>
              <h3>Spesh origin story cutscene #1 reveal… 🍩</h3>
              <p>Find out how Spesh gets to Donut World!</p>
            </div>
            <div className="col-12 col-sm-1 left-map"></div>

            <div className="col-12 col-sm-5 left-map">
              <h2>MARCH</h2>
            </div>
            <div className="col-12 col-sm-6 right-map">
              <h3 style={{ color: "#7d00df !important" }}>...???...</h3>
              <p>What’s this?</p>
              <h3>NYC exclusive screening 🍿</h3>
              <p>Speshie holder red carpet and after party</p>
              <h3>Voice a Speshie 🎤</h3>
              <p>Holders only contest</p>
              <h3>Donut World cutscene #2 reveal… 🚀</h3>
              <p>See how Spesh leaves Donut World</p>
              <div className="last">
                Not listed: all the collabs, partnerships, giveaways and
                immaculate vibes we have planned
                <h3>Monthly Townhalls starting in January</h3>
              </div>
            </div>
            <div className="col-12 col-sm-1 left-map"></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default RoadMap;
