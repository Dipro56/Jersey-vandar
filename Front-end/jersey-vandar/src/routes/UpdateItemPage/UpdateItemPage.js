import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { UpdateItemCard } from '../../components/UpdateItemCard/UpdateItemCard';
// import { useGetAllItem } from '../../hooks/useGetAllItem';

export const UpdateItemPage = () => {
  // const { items } = useGetAllItem();
  const { pID } = useParams();
  console.log('item type', typeof items);

  const [updateItem, setUpdateItem] = useState();

  // const updateItem = items.find((item) => {
  //   return item._id === pID;
  // });

  const URL = `http://localhost:5000/getItemToUpdate/${pID}`;

  useEffect(() => {
    axios.get(URL).then((res) => {
      setUpdateItem(res.data);
      // console.log(items);
    });
  }, []);

  console.log('type of updateItem', typeof updateItem);
  console.log('updateItem', updateItem);

  // console.log('user id', id);
  console.log('product id', pID);
  return (
    <div>
      <Header />
      <div className="d-flex justify-content-center mb-5 item-slide-in">
        <div className="container row d-flex justify-content-center ">
          {updateItem?.map((data) => (
            <UpdateItemCard key={data.id} updateData={data} />
          ))}
        </div>
      </div>
    </div>
  );
};
