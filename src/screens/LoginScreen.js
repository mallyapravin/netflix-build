import React from "react";
import "./LoginScreen.css";

function LoginScreen() {
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png"
          alt="netflix_login_logo"
        />
        <button className="loginScreen__button">Sign In</button>
        <div className="loginScreen__gradient" />
        <div className="loginScreen__body">
          <>
            <h1>Unlimited films, TV programmes and more. </h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>

            <div className="loginScreen__input">
              <form>
                <input type="email" placeholder="email" />
                <button className="loginScreen__getStarted">Get Started</button>
              </form>
            </div>
          </>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
