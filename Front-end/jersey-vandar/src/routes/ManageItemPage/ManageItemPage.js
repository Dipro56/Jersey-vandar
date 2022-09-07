import React from 'react';
import { Header } from '../../components/Header/Header';
import { ManageItemCard } from '../../components/ManageItemCard/ManageItemCard';
import { useGetAllItem } from '../../hooks/useGetAllItem';

export const ManageItemPage = () => {
  const { items } = useGetAllItem();

  console.log(items);

  return (
    <div>
      <Header />
      <h6 className="m-4">Manage Item</h6>
      <div className="d-flex justify-content-center mb-5 item-slide-in">
        <div className="container row ">
          {items.map((data) => (
            <ManageItemCard key={data.id} itemData={data} />
          ))}
        </div>
      </div>
    </div>
  );
};
