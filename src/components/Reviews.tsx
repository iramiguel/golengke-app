import React from "react";
import "./Headline.css";

const Reviews = () => {
  return (
    <div className="sign-in-wrapper">
      <span className="sign-in-message">
        <span className="highlight">Log in</span> or{" "}
        <span className="highlight">Sign up</span> to fill your basket with the
        day’s freshest picks!
      </span>
      <div className="sign-btn-wrapper">
        <button>Log In</button>
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default Reviews;
