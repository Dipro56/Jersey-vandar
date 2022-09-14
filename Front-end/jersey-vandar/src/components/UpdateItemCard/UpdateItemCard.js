import React, { useState } from 'react';
import cogoToast from 'cogo-toast';
import axios from 'axios';

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
    changeQuantity = changeQuantity.toString();
    console.log(changeQuantity);
    setNewQuantity(changeQuantity);
  };

  const deliver = () => {
    let changeQuantity = Number(newQuantity);
    changeQuantity--;
    if (changeQuantity >= 0) {
      changeQuantity = changeQuantity.toString();
      setNewQuantity(changeQuantity);
    } else {
      setNewQuantity('0');
      cogoToast.info(`No item to deliver`);
    }
  };

  const updateNewQuantity = () => {
    const pID = _id;
    const URL = `http://localhost:5000/updateQuantity/${pID}`;
    const updatedQuantity = { newQuantity };

    axios
      .post(URL, updatedQuantity)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    cogoToast.success('Quantity updated');
  };

  return (
    <div className="col-lg-6 col-md-12 col-sm-12 mt-3 mb-3">
      <div class="card w-100 h-100 card-for-hover ">
        <img src={`${imageURL}`} class="card-img-top p-2" alt="..." />
        <div class="card-body">
          <div className="d-flex justify-content-start">
            <h4 className="text-start">Title: {itemName} </h4>
          </div>
          <p className="d-flex justify-content-start text-start  overflow-auto">
            Product ID: {_id}
          </p>
          <h5 className="justify-content-start d-flex">
            Category: {category}{' '}
          </h5>
          <p className="card-text justify-content-start d-flex text-start">
            Description: {description}
          </p>
          <p className="justify-content-start d-flex text-start">
            Price: {price} BDT
          </p>
          <p className="justify-content-start d-flex text-start">
            Quantity: {newQuantity}
          </p>
          <h5 className="justify-content-start d-flex text-start">Supplier</h5>
          <p className="card-text justify-content-start d-flex text-start overflow-auto">
            Supplier mail: {addedByEmail}
          </p>
          <p className="card-text justify-content-start d-flex text-start overflow-auto">
            Supplier ID: {addedById}
          </p>

          <div className="d-flex overflow-auto col-12 ">
            <button onClick={addToStock} className="btn btn-success fs-6">
              Add to stock
            </button>
            <button onClick={deliver} className="btn btn-danger fs-6 ms-3">
              Deliver
            </button>
          </div>
        </div>
        <button onClick={updateNewQuantity} className="btn btn-primary ">
          Save change
        </button>
      </div>
    </div>
  );
};
