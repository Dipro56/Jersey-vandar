import React from 'react';
import Background from '../../assets/banner_image/jv_cover.gif';

export const Banner = () => {
  return (
    <div className="container-fluid">
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div>
              {' '}
              <img
                className="d-block w-100"
                src={Background}
                alt="First slide"
              />
            </div>

            <div class="carousel-caption d-none d-md-block mt-5">
              <p className="fs-4">
                Get premium quality jersey of your favourite team!
              </p>
              <br />
              <button className="btn btn-warning fs-5">Our items!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
