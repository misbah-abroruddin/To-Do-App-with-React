import React from "react";

const Button = ({ handleOnClick, textButton, className }) => {
  return (
    <button className={className} onClick={handleOnClick}>
      {textButton}
    </button>
  );
};

export default Button;
