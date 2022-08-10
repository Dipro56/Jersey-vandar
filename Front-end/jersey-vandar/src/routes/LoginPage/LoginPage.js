import React from 'react';
import { Header } from '../../components/Header/Header';
import { TextField } from '@mui/material';
import logo from '../../assets/logo/jv_logo.png';
import googleLogo from '../../assets/logo/google_logo.png';
import { Link } from 'react-router-dom';

export const LoginPage = () => {
  return (
    <div>
      <Header />
      <div className="mt-3 col-lg-4 col-md-8 col-sm-12 bg-white shadow justify-content-center align-items-center container p-5">
        <div>
          <img src={logo} alt="" width="150" height="100" />
          <h4 className="mt-3 ">Login</h4>
          <form>
            <div className="form-group mt-4 mb-3">
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                type="text"
                className="form-control shadow w-100"
                name="email"
                required
              />
            </div>

            <div className="form-group mt-4 mb-3">
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                className="form-control shadow w-100"
                name="password"
                type="password"
                placeholder="Password"
                required
              />
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
