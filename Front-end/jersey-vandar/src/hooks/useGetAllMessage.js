import { useState, useEffect } from 'react';
import axios from 'axios';

export const useGetAllMessage = () => {
  const [allMessage, setAllMessage] = useState([]);

  const URL = `http://localhost:5000/allMessage`;

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
