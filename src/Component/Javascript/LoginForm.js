import React, { useState } from "react";
import "../CSS/LoginForm.css";
import "react-phone-number-input/style.css";
import { Button } from "@material-ui/core";
import { auth } from "../../firebase";
import firebase from "firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";
toast.configure();

function LoginForm() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [disable, setDisable] = useState(false);

  function configureCaptcha() {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          this.onSignInSubmit();
          console.log("Recaptca varified");
        },
        defaultCountry: "IN",
      }
    );
  }

  function onSignInSubmit(e) {
    // setDisable(true);
    e.preventDefault();
    configureCaptcha();
    const phoneNumber = "+91" + mobile;
    console.log(phoneNumber);
    const appVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        console.log("OTP has been sent");
        toast.success(`OTP has been Sended`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
        // ...
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
        toast.warning(`Error; SMS not sent`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
        console.log("SMS not sent");
      });
  }

  function onSubmitOTP(e) {
    setDisable(false);
    e.preventDefault();
    const code = otp;
    console.log(code);
    window.confirmationResult
      .confirm(code)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        console.log(JSON.stringify(user));
        history.push("/");
        toast.success(`OTP has been Verified`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
        // ...
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
        toast.warning(`User couldn't sign in (bad verification code?)`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
      });
  }

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const register = (e) => {
    e.preventDefault();
    setDisable(true);

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          // history.push("/");
          toast.success(`Account is Created`, {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
    onSignInSubmit(e);
  };

  return (
    <div className="loginform">
      <div className="login_container">
        <div className="loginform_upper">
          <img
            src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2021/7/14/1db28809-f3db-48b1-b303-d937716565661626257521634-Banner_Hamburger--2---1-.jpg"
            alt=""
          />
        </div>
        <div className="sign_box">
          <div className="login_tag">
            <h4>Login</h4>
            <span>or</span>
            <h4>Signup</h4>
          </div>
          <div className="login_input">
            <div id="sign-in-button"></div>
            {!disable && (
              <>
                <span>+91 |</span>
                <input
                  type="text"
                  placeholder="Mobile Number"
                  maxlength="10"
                  className="number_input"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </>
            )}

            {disable && (
              <input
                type="text"
                placeholder="Enter The OTP"
                maxlength="6"
                className="number_input"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            )}
          </div>
          {!disable && (
            <div className="login_input">
              <input
                type="text"
                placeholder="Enter The Email"
                className="number_input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          )}
          {!disable && (
            <div className="login_input">
              <input
                type="password"
                placeholder="Enter The Password"
                className="number_input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          )}
          <div className="login_terms">
            <p>
              By continuing, I agree to the <span>Terms of Use </span>&{" "}
              <span>Privacy Policy</span>
            </p>
          </div>
          <div className="login_button">
            {!disable && (
              <Button
                className="btn"
                onClick={signIn}
              >
                Sign In
              </Button>
            )}
            {disable && (
              <Button className="btn" onClick={(e) => onSubmitOTP(e)}>
                SUBMIT OTP
              </Button>
            )}
          </div>
          <div className="login_footer">
            <p>
              Have trouble logging in? <span>Get help</span>
            </p>
          </div>
          <div className="login_button1">
            {!disable && (
              <>
                <Button className="btn" onClick={register}>
                  Create your Account
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
