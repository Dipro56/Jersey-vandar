import React from 'react';
import leoMessi from './../../assets/homepage_image/messi.jpg';
import { useState } from 'react';
import { TextareaAutosize } from '@mui/material';
import date from 'date-and-time';
import axios from 'axios';
import cogoToast from 'cogo-toast';

export const MessageCard = () => {
  const [description, setDescription] = useState('');

  const handleMessageChange = (event) => {
    // 👇️ access textarea value
    setDescription(event.target.value);
    console.log(event.target.value);
  };

  const handleMessageSubmit = (event) => {
    event.preventDefault();
    const now = new Date();
    const dateAndTime = date.format(now, 'DD/MM/YYYY hh:mmA');
    const message = { dateAndTime, description };

    const URL = `http://localhost:5000/addMessage`;

    axios
      .post(URL, message)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    cogoToast.success('Message sent');
  };
  return (
    <div className="d-flex m-5 item-slide-in card shadow-lg row">
      <h4 className="mt-5 mb-5 text-center">Send your message </h4>
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-lg-7 col-md-7 col-sm-12 p-5">
          <img
            src={leoMessi}
            className="d-inline-block align-top img-fluid"
            alt="React Bootstrap logo"
          />
        </div>
        <div className="col-lg-5 col-md-5 col-sm-12 p-5">
          <form onSubmit={handleMessageSubmit}>
            <h6 className="text-start pt-4 pb-4">Share your thought</h6>
            <div className="d-flex justify-content-center ">
              <TextareaAutosize
                aria-label="minimum height"
                minRows={5}
                placeholder="Share message"
                className="w-100 p-2"
                onChange={handleMessageChange}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary d-flex justify-content-start mt-3 fs-5 rounded-3 overflow-auto"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
