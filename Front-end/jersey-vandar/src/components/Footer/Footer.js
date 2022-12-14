import React from 'react';
import './Footer.css';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();

  return (
    <div className="footer">
      <div className="d-flex justify-content-center align-items-center col-12  row mt-5 p-5">
        <div className="d-flex justify-content-start align-items-center col-lg-3 col-md-4 col-sm-12   background pt-5 ps-5 pe-5">
          <div>
            <h2 className="d-flex justify-content-start mt-2 mb-2">Adress</h2>
            <p className="d-flex justify-content-start fs-6  align ">
              Jersey Vandar <br />
              Block-C Road-4 House-127 (6-A) <br />
              Bashundhara, Dhaka
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-start align-items-center col-lg-3 col-md-4 col-sm-12   background pt-5 ps-5 pe-5">
          <div>
            <h2 className="d-flex justify-content-start mt-2 mb-2">Products</h2>
            <p className="d-flex justify-content-start fs-6  align ">
              Football jersey <br />
              Cricket jersey <br />
              Other
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-start align-items-center col-lg-3 col-md-4 col-sm-12   background pt-5 ps-5 pe-5">
          <div>
            <h2 className="d-flex justify-content-start  mb-2">Join us</h2>
            <Link
              className="text-decoration-none text-black d-flex justify-content-start"
              to="/register"
            >
              Sign up
            </Link>{' '}
            <Link
              className="text-decoration-none text-black d-flex justify-content-start"
              to="/login"
            >
              Sign in
            </Link>{' '}
            <Link
              className="text-decoration-none text-black d-flex justify-content-start "
              to="/help"
            >
              Help
            </Link>{' '}
          </div>
        </div>
        <div className="d-flex justify-content-start align-items-center col-lg-3 col-md-4 col-sm-12   background pt-5 ps-5 pe-5">
          <div>
            <h2 className="d-flex justify-content-start mt-2 mb-2">Contact</h2>
            <p className="d-flex justify-content-start fs-6  align ">
              Phone: ++880 1717680510 <br />
              Email: sadatshahriarbari@gmail.com <br />
            </p>
            <div className="d-flex justify-content-start">
              <AiFillFacebook size={30} className="me-2" />
              <AiFillGithub size={30} className="me-2" />
              <AiFillInstagram size={30} className="me-2" />
            </div>
          </div>
        </div>
      </div>
      <div class="footer pb-2">
        <p className=" fs-5">Jersey vandar ?? {year}</p>
      </div>
    </div>
  );
};
