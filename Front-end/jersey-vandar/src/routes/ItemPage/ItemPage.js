import React from 'react';
import { Header } from '../../components/Header/Header';
import { ItemCard } from '../../components/ItemCard/ItemCard';
import { useGetAllItem } from '../../hooks/useGetAllItem';
import './ItemPage.css';

export const ItemPage = () => {
  const { items } = useGetAllItem();

  console.log(items);

  return (
    <div>
      <Header />
      <h1 className="m-4">Item page</h1>
      <div className="d-flex justify-content-center mb-5 item-slide-in">
        <div className="container row ">
          {items.map((data) => (
            <ItemCard key={data.id} itemData={data} />
          ))}
        </div>
      </div>
    </div>
  );
};
