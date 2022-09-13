import React, { useState } from 'react';

export const UpdateItemCard = (props) => {
  console.log(props.updateData);
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
  } = props.updateData;

  const [newQuantity, setNewQuantity] = useState(quantity);
  const addToStock = () => {
    let changeQuantity = Number(newQuantity);
    changeQuantity++;
    console.log(changeQuantity);
    setNewQuantity(changeQuantity);
  };

  const deliver = () => {
    let changeQuantity = Number(newQuantity);
    changeQuantity--;
    console.log(changeQuantity);
    setNewQuantity(changeQuantity);
  };
  return (
    <div className="col-lg-6 col-md-10 col-sm-12 mt-3 mb-3">
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
            Quantity: {newQuantity}
          </p>
          <h5 className="justify-content-start d-flex text-start">Supplier</h5>
          <p className="justify-content-start d-flex text-start text-wrap">
            Supplier mail: {addedByEmail}
          </p>
          <p className="justify-content-start d-flex text-start text-wrap">
            Supplier ID: {addedById}
          </p>
          <div className="d-flex">
            <button onClick={addToStock} className="btn btn-success ">
              Add to stock
            </button>
            <button onClick={deliver} className="btn btn-danger ms-3">
              Deliver
            </button>
          </div>
        </div>
        <button className="btn btn-primary ">Save change</button>
      </div>
    </div>
  );
};
