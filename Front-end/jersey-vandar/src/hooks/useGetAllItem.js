import { useState, useEffect } from 'react';
import axios from 'axios';
import { useFirebase } from './useFirebase';

export const useGetAllItem = () => {
  const { user } = useFirebase();

  console.log(user);

  const [items, setItems] = useState([]);

  const URL = `https://jersey-vandar-backend.herokuapp.com/getAllItems`;

  useEffect(() => {
    axios.get(URL).then((res) => {
      setItems(res.data);
      // console.log(items);
    });
  }, []);

  const footballItems = items.filter((item) => {
    return item.category === 'Football';
  });

  const cricketItems = items.filter((item) => {
    return item.category === 'Cricket';
  });

  const customeItems = items.filter((item) => {
    return item.category === 'Custome';
  });

  const homeItems = items.slice(0, 6);

  // const myItem = items.filter((item) => {
  //   return item.addedById === user.uid;
  // });
  // setMyItems(myItem);
  // console.log('my Items', myItems);
  return {
    items,
    footballItems,
    cricketItems,
    homeItems,
    customeItems,
  };
};
