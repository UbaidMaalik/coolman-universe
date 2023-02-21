import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import "./spesh.css";

const SpeshStory = (props) => {
  return (
    <Fragment>
      <div className="spesh">
        <div className="container">
          <div className="row spechReverse">
            <div className="col-12 col-sm-8 speshText">
              <h2>SPESH'S STORY</h2>
              <p>
                Spesh is looking for his best friend throughout Coolman's
                Universe. To travel through this universe, Spesh uses a
                surfboard and a compass. This compass is no ordinary compass.
                Not only does this compass point Spesh in the right direction to
                find his friend, it also tracks the path that Spesh's friend has
                taken. As Spesh follows his compass (while surfing Coolman's
                Universe), he finds himself exploring worlds that he's never
                experienced.
              </p>
              <Link to="https://coolmansuniverse.com/coolman">
                <Button title="About The Creator" />
              </Link>
            </div>
            <div className="col-12 col-sm-4 speshImage">
              <img src="/images/peshImage.png" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SpeshStory;
