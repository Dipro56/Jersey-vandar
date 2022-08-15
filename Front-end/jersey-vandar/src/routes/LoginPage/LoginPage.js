import React, { useState, useRef } from 'react';
import { Header } from '../../components/Header/Header';
import { TextField, Button } from '@mui/material';
import logo from '../../assets/logo/jv_logo.png';
import googleLogo from '../../assets/logo/google_logo.png';
import { Link } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import cogoToast from 'cogo-toast';

export const LoginPage = () => {
  const [eyeIcon, setEyeIcon] = useState('AiFillEye');

  const [passwordVisible, setPasswordVisible] = useState('text');

  const emailRef = useRef('');
  const passwordRef = useRef('');

  const handleToggle = () => {
    if (eyeIcon === 'AiFillEye') {
      setEyeIcon('AiFillEyeInvisible');
      setPasswordVisible('password');
    } else {
      setEyeIcon('AiFillEye');
      setPasswordVisible('text');
    }
  };

  const loginFormController = (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (email && password) {
      console.log(email, password);
      cogoToast.success(`Welcome ${email}`);
    } else {
      cogoToast.error('Fill input fields properly');
    }
  };

  return (
    <div>
      <Header />
      <div className="mt-3 col-lg-4 col-md-8 col-sm-12 bg-white shadow justify-content-center align-items-center container pt-1 ps-5 pe-5 pb-4">
        <div>
          <img src={logo} alt="" width="150" height="100" />
          <h4 className="mt-3 ">Login</h4>
          <form onSubmit={loginFormController}>
            <div className="form-group mt-4 mb-3">
              <TextField
                inputRef={emailRef}
                id="outlined-basic"
                label="Email"
                variant="outlined"
                type="text"
                className="form-control shadow w-100"
                name="email"
                required
              />
            </div>

            <div className="form-group mt-4 mb-3 d-flex">
              <TextField
                inputRef={passwordRef}
                id="outlined-basic"
                label="Password"
                variant="outlined"
                className="form-control shadow w-100"
                name="password"
                type={passwordVisible}
                placeholder="Password"
                required
              />
              <Button
                variant="none"
                color="primary"
                href="#outlined-buttons"
                onClick={handleToggle}
              >
                {eyeIcon === 'AiFillEye' ? (
                  <AiFillEye size={30} className="me-2" />
                ) : (
                  <AiFillEyeInvisible size={30} className="me-2" />
                )}
              </Button>
            </div>

            <div>
              <button
                type="button"
                className="btn btn-link fs-5 text-decoration-none "
              >
                Forget password?
              </button>
            </div>
            <button
              type="submit"
              className="btn btn-primary mt-2 w-100 fs-5 rounded-3"
            >
              Submit
            </button>
          </form>

          {/* {errorMessage ? <p className="text-danger">{errorMessage}</p> : <></>} */}
          <div className="d-flex mt-3 mb-3">
            <hr className="w-50 ms-3 me-3" />
            <p>Or</p>
            <hr className="w-50 ms-3 me-3" />
          </div>
          <p className="fs-5">Use social login</p>
          <div className="d-flex justify-content-center">
            <img
              // onClick={signInWithGoogle}
              src={googleLogo}
              alt=""
              width="50"
              height="50"
            />
            {/* <img
              onClick={signInWithFacebook}
              src={facebook}
              alt=""
              width="80"
              height="50"
            /> */}
          </div>

          <p className="m-3 fs-5">
            Don't have account yet?
            <span>
              <Link className="fs-5 text-decoration-none" to="/register">
                {' '}
                Register
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
