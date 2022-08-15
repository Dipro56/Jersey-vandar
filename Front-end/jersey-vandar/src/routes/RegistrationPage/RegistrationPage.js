import React, { useState, useRef } from 'react';
import { Header } from '../../components/Header/Header';
import { TextField, Button } from '@mui/material';
import logo from '../../assets/logo/jv_logo.png';
import { Link } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import cogoToast from 'cogo-toast';

export const RegistrationPage = () => {
  const [eyeIcon, setEyeIcon] = useState('AiFillEye');
  const [confirmPassToggle, setConfirmPassToggle] = useState('AiFillEye');

  const [passwordVisible, setPasswordVisible] = useState('text');
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState('text');

  const emailRef = useRef('');
  const passwordRef = useRef('');
  const confirmPasswordRef = useRef('');

  const handleToggle = () => {
    if (eyeIcon === 'AiFillEye') {
      setEyeIcon('AiFillEyeInvisible');
      setPasswordVisible('password');
    } else {
      setEyeIcon('AiFillEye');
      setPasswordVisible('text');
    }
  };

  const handleConfirmPasswordToggle = () => {
    if (confirmPassToggle === 'AiFillEye') {
      setConfirmPassToggle('AiFillEyeInvisible');
      setConfirmPasswordVisible('password');
    } else {
      setConfirmPassToggle('AiFillEye');
      setConfirmPasswordVisible('text');
    }
  };

  const loginFormController = (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (password === confirmPassword && email && password && confirmPassword) {
      console.log(email, password);
      cogoToast.success(`Welcome ${email}`);
    } else {
      cogoToast.error('Password dose not match');
    }
  };

  return (
    <div>
      <Header />
      <div className="mt-3 col-lg-4 col-md-8 col-sm-12 bg-white shadow justify-content-center align-items-center container pt-1 ps-5 pe-5 pb-4">
        <div>
          <img src={logo} alt="" width="150" height="100" />
          <h4 className="mt-3 ">Registration</h4>
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

            <div className="form-group mt-4 mb-3 d-flex">
              <TextField
                inputRef={confirmPasswordRef}
                id="outlined-basic"
                label="Confirm password"
                variant="outlined"
                className="form-control shadow w-100"
                name="password"
                type={confirmPasswordVisible}
                placeholder="Confirm password"
                required
              />
              <Button
                variant="none"
                color="primary"
                href="#outlined-buttons"
                onClick={handleConfirmPasswordToggle}
              >
                {confirmPassToggle === 'AiFillEye' ? (
                  <AiFillEye size={30} className="me-2" />
                ) : (
                  <AiFillEyeInvisible size={30} className="me-2" />
                )}
              </Button>
            </div>

            <button
              type="submit"
              className="btn btn-primary mt-2 w-100 fs-5 rounded-3"
            >
              Register
            </button>
          </form>

          <p className="m-3 fs-5">
            Already have an account?
            <span>
              <Link className="fs-5 text-decoration-none" to="/login">
                {' '}
                Login
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
