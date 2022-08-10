import React from 'react';
import './HomePage.css';
import Messi from './../../../assets/homepage_image/messi.jpg';
import { Header } from '../../Header/Header';
import { Banner } from '../../Banner/Banner';
import { Footer } from '../../Footer/Footer';

export const HomePage = () => {
  return (
    <>
      <Header />
      <Banner />
      <div className="d-flex justify-content-center align-items-center  col-12 row mt-5 mb-5">
        <div className="d-flex justify-content-center align-items-center col-lg-4 col-md-5 col-sm-8   background p-5">
          <div>
            <h4 className="d-flex justify-content-start mt-5 mb-4">About us</h4>
            <p className="d-flex justify-content-start  align mb-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-5 col-sm-8  ">
          <img
            src={Messi}
            className="d-inline-block align-top img-fluid"
            alt="React Bootstrap logo"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};
