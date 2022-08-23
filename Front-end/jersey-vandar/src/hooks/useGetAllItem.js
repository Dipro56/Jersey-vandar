import { useState, useEffect } from 'react';
import axios from 'axios';

export const useGetAllItem = () => {
  const [items, setItems] = useState([]);

  const URL = `http://localhost:5000/getAllItems`;

  useEffect(() => {
    axios.get(URL).then((res) => {
      setItems(res.data);
      console.log(items);
    });
  }, []);

  return {
    items,
  };
};
