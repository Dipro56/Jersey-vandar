import React from 'react';
import './ItemCard.css';

export const ItemCard = (props) => {
  console.log(props.itemData);
  const {
    _id,
    itemName,
    category,
    price,
    quantity,
    imageURL,
    addedById,
    addedByEmail,
    description,
  } = props.itemData;
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mt-3 mb-3">
      <div class="card w-100 h-100 card-for-hover ">
        <img src={`${imageURL}`} class="card-img-top p-2" alt="..." />
        <div class="card-body">
          <div className="d-flex justify-content-start">
            <h4 className="text-start">Title: {itemName} </h4>
          </div>
          <p className="d-flex justify-content-start text-start">
            Product ID: {_id}
          </p>
          <h5 className="justify-content-start d-flex">
            Category: {category}{' '}
          </h5>
          <p class="card-text justify-content-start d-flex text-start">
            Description: {description}
          </p>
          <p className="justify-content-start d-flex text-start">
            Price: {price} BDT
          </p>
          <p className="justify-content-start d-flex text-start">
            Quantity: {quantity}
          </p>
          <h5 className="justify-content-start d-flex text-start">Supplier</h5>
          <p className="justify-content-start d-flex text-start">
            Supplier mail: {addedByEmail}
          </p>
          <p className="justify-content-start d-flex text-start">
            Supplier ID: {addedById}
          </p>
        </div>
      </div>
    </div>
  );
};
