import React, { useRef, useState } from "react";
import "./SignUp.css";
import { auth } from "../../firebase/firebase";

function SignUp() {
  const [signup, setSignup] = useState(false);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
        setSignup(false);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const SignIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="SignupScreen">
      {!signup ? (
        <form>
          <h1>Sign in</h1>
          <input ref={emailRef} placeholder="Email" type="email" />
          <input ref={passwordRef} placeholder="password" type="password" />
          <button onClick={SignIn} type="submit">
            Sign in
          </button>
          <h4>
            <span className="SignUp_grey">New to NetFlix? </span>
            <span
              /* onClick={register} */ onClick={() => setSignup(true)}
              className="SignUp_link"
            >
              Sign up now
            </span>
          </h4>
        </form>
      ) : (
        <form>
          <h1>Sign up</h1>
          <input ref={emailRef} placeholder="Email" type="email" />
          <input ref={passwordRef} placeholder="password" type="password" />
          <button onClick={register} type="submit">
            Sign up
          </button>
        </form>
      )}
    </div>
  );
}

export default SignUp;
