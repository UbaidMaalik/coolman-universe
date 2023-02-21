import React from "react";

const Button = (props) => {
  return (
    <div className="Button">
      <a className="allButton">{props.title}</a>
    </div>
  );
};

export default Button;
