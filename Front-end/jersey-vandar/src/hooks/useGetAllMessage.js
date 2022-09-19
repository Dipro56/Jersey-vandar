import { useState, useEffect } from 'react';
import axios from 'axios';

export const useGetAllMessage = () => {
  const [allMessage, setAllMessage] = useState([]);

  const URL = `https://jersey-vandar-backend.herokuapp.com/allMessage`;

  useEffect(() => {
    axios.get(URL).then((res) => {
      setAllMessage(res.data);
      console.log(allMessage);
    });
  }, []);

  return {
    allMessage,
  };
};
