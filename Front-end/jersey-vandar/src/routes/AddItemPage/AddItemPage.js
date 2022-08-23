import React, { useRef, useState } from 'react';
import {
  TextField,
  FormControl,
  InputLabel,
  Button,
  TextareaAutosize,
} from '@mui/material';
import { useParams } from 'react-router-dom';

import MenuItem from '@mui/material/MenuItem';

import Select from '@mui/material/Select';
import { Header } from '../../components/Header/Header';
import { useFirebase } from '../../hooks/useFirebase';

import axios from 'axios';
import cogoToast from 'cogo-toast';

export const AddItemPage = () => {
  const { user } = useFirebase();

  const { id } = useParams();

  const [description, setDescription] = useState('');

  const handleMessageChange = (event) => {
    // 👇️ access textarea value
    setDescription(event.target.value);
    console.log(event.target.value);
  };

  const itemNameRef = useRef('');
  const priceRef = useRef('');
  const supplierRef = useRef('');
  const imageURLRef = useRef('');
  const quantityRef = useRef('');

  const [category, setCatrgory] = useState('');
  const [open, setOpen] = React.useState(false);

  //category per
  const handleChange = (event) => {
    setCatrgory(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const addItemController = (event) => {
    event.preventDefault();

    const itemName = itemNameRef.current.value;
    const price = priceRef.current.value;
    const imageURL = imageURLRef.current.value;
    const addedById = user.uid;
    const addedByEmail = user.email;
    const quantity = quantityRef.current.value;
    const supplier = supplierRef.current.value;

    const addedItem = {
      itemName,
      category,
      price,
      quantity,
      imageURL,
      supplier,
      addedById,
      addedByEmail,
      description,
    };

    console.log(addedItem);

    const URL = `http://localhost:5000/addItems/${id}`;

    axios
      .post(URL, addedItem)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    cogoToast.success('Item added successfully');
  };

  return (
    <div>
      <Header id={id} />
      <div className="mt-5 col-lg-4 col-md-8 col-sm-12 bg-white shadow justify-content-center align-items-center container pt-1 ps-5 pe-5 pb-4">
        <div>
          <h4 className="mt-3 ">Add item</h4>
          <form onSubmit={addItemController}>
            <div className="form-group mt-4 mb-3 ">
              <h6 className="d-flex justify-content-start">Title</h6>
              <TextField
                inputRef={itemNameRef}
                id="outlined-basic"
                label="Title"
                variant="outlined"
                type="text"
                className="form-control shadow w-100"
                name="title"
                required
              />
            </div>

            <div className="d-flex justify-content-start align-items-center mt-3 mb-3">
              <FormControl className="mt-4" sx={{ minWidth: 120 }}>
                <InputLabel id="demo-controlled-open-select-label">
                  Category
                </InputLabel>
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  open={open}
                  onClose={handleClose}
                  onOpen={handleOpen}
                  value={category}
                  label="Category"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={'Football'}>Football</MenuItem>
                  <MenuItem value={'Cricket'}>Cricket</MenuItem>
                  <MenuItem value={'Custome'}>Custome</MenuItem>
                  <MenuItem value={'Others'}>Others</MenuItem>
                </Select>
              </FormControl>
              <Button sx={{ display: 'block' }} onClick={handleOpen}></Button>
            </div>

            <div className="d-flex">
              <div className="mt-4 mb-4">
                <h6 className="d-flex justify-content-start">Image URL</h6>
                <TextField
                  inputRef={imageURLRef}
                  id="outlined-basic"
                  label="Image URL"
                  variant="outlined"
                  type="text"
                  className="form-control shadow w-100"
                  name="ImageURL"
                  required
                />
              </div>

              <div className="m-4">
                <h6 className="d-flex justify-content-start">Quantity</h6>
                <TextField
                  inputRef={quantityRef}
                  id="outlined-basic"
                  label="Quantity"
                  variant="outlined"
                  type="text"
                  className="form-control shadow w-100"
                  name="quantity"
                  required
                />
              </div>
            </div>

            <div className="d-flex">
              <div className="mt-4 mb-4">
                <h6 className="d-flex justify-content-start">Price</h6>
                <TextField
                  inputRef={priceRef}
                  id="outlined-basic"
                  label="Price"
                  variant="outlined"
                  type="text"
                  className="form-control shadow w-100"
                  name="price"
                  required
                />
              </div>
            </div>

            <div>
              <h6 className="d-flex justify-content-start">Description</h6>
              <TextareaAutosize
                aria-label="minimum height"
                minRows={2}
                placeholder="Write description"
                className="w-100 p-2"
                onChange={handleMessageChange}
              />
            </div>

            <div className="mt-4 mb-4">
              <h6 className="d-flex justify-content-start">Added by :</h6>
              <h6 className="d-flex justify-content-start">ID: {user.uid}</h6>
              <h6 className="d-flex justify-content-start">
                Email: {user.email}
              </h6>
            </div>

            <button
              type="submit"
              className="btn btn-primary mt-2 w-100 fs-5 rounded-3"
            >
              Add item
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
