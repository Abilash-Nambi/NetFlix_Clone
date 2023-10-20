import React, { useState } from "react";
import "./Login.css";
import backGroungImg from "../../image/backgroung login.jpg";
import SignUp from "../SignUp/SignUp";
function Login() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginScreen_Background">
        <img
          className="loginScreen_logo"
          src={require("../../image/580b57fcd9996e24bc43c529.png")}
          alt=""
        />
        <button onClick={() => setSignIn(true)} className="loginScreen_login">
          Sign in
        </button>
        <div className="loginScreen_gradiant" />
      </div>
      <div className="loginScreen_body">
        {signIn ? (
          <SignUp />
        ) : (
          <>
            <h1>Unlimited films,TV programmes and more.</h1>
            <h2>Watch anywhere ,Cancel at anytime</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership
            </h3>
            <div className="loginScreen_input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  onClick={() => setSignIn(true)}
                  className="loginScreen_getstarted"
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
