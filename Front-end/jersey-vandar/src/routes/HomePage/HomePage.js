import React from 'react';
import { Banner } from '../../components/Banner/Banner';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
// import Messi from '../../assets/homepage_image/messi.jpg';
import transparent from '../../assets/background_image/transparent.png';

import './HomePage.css';
import { useGetAllItem } from '../../hooks/useGetAllItem';
import { ItemCard } from '../../components/ItemCard/ItemCard';

export const HomePage = () => {
  const { homeItems } = useGetAllItem();

  return (
    <>
      <Header />
      <Banner />
      <div className="d-flex justify-content-center align-items-center  col-12 row mt-5 mb-5">
        <div className="d-flex justify-content-center align-items-center col-lg-4 col-md-5 col-sm-8   background p-5">
          <div>
            <h4 className="d-flex justify-content-start mt-5 mb-4">About us</h4>
            <p className="d-flex justify-content-start  align mb-5">
              Jersey vandar is a sports good management system.Where different
              kind of sports jersey is stored . Different national team and club
              jersey is available here.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-5 col-sm-8 test">
          <img
            src={transparent}
            className="d-inline-block align-top img-fluid"
            alt="React Bootstrap logo"
          />
        </div>
      </div>
      {/* sample products */}
      <div className="d-flex justify-content-center mb-5 item-slide-in">
        <div className="container row card-body shadow-lg p-4">
          <h4 id="product" className="m-4">
            Products
          </h4>
          {homeItems.map((data) => (
            <ItemCard key={data.id} itemData={data} />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};
