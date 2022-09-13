import { useState, useEffect } from 'react';
import axios from 'axios';
import { useFirebase } from './useFirebase';

export const useGetAllItem = () => {
  const { user } = useFirebase();

  console.log(user);

  const [items, setItems] = useState([]);

  const URL = `http://localhost:5000/getAllItems`;

  useEffect(() => {
    axios.get(URL).then((res) => {
      setItems(res.data);
      // console.log(items);
    });
  }, []);

  // const myItem = items.filter((item) => {
  //   return item.addedById === user.uid;
  // });
  // setMyItems(myItem);
  // console.log('my Items', myItems);
  return {
    items,
  };
};
