import axios from 'axios';
import React from 'react';
import DataTable from 'react-data-table-component';

import { useFirebase } from '../../hooks/useFirebase';
import { useGetAllItem } from '../../hooks/useGetAllItem';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export const MyItemsTable = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleYes = (itemId) => {
    setOpen(false);
    console.log('id', itemId);
    const URL = `http://localhost:5000/deleteItem/${itemId}`;
    axios
      .post(URL)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleNo = () => {
    setOpen(false);
  };

  const columns = [
    {
      name: 'Image',
      selector: (row) => (
        <img src={row.imageURL} alt="" width="70" height="70" />
      ),
      sortable: true,
    },
    {
      name: 'Product name',
      selector: (row) => row.itemName,
      sortable: true,
    },
    {
      name: 'Product ID',
      selector: (row) => row._id,
      sortable: true,
    },
    {
      name: 'Category',
      selector: (row) => row.category,
      sortable: true,
    },
    {
      name: 'Price',
      selector: (row) => `${row.price} BDT`,
      sortable: true,
    },
    {
      name: 'Quantity',
      selector: (row) => row.quantity,
      sortable: true,
    },
    {
      name: 'Edit',
      cell: (row) => (
        <button
          className="btn btn-sm btn-success fs-6"
          // onClick={() => console.log(row._id)}
          onClick={() => {
            console.log(`Edit product ${row._id}`);
          }}
        >
          Edit
        </button>
      ),
    },
    {
      name: 'Delete',
      cell: (row) => (
        <>
          <button
            className="btn btn-sm btn-danger fs-6"
            // onClick={() => console.log(row._id)}
            onClick={handleClickOpen}
          >
            Delete
          </button>
          <Dialog
            open={open}
            keepMounted
            onClose={handleNo}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle>{`You are going to delete an item`}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                Are you sure?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => handleYes(row._id)}>Yes</Button>
              <Button onClick={handleNo}>No</Button>
            </DialogActions>
          </Dialog>
        </>
      ),
    },
  ];
  const { user } = useFirebase();

  const { items } = useGetAllItem();

  const myItems = items.filter((item) => {
    return item.addedById === user.uid;
  });

  return (
    <div className="container">
      <h6 className="m-5">Items added by {user.email} </h6>
      <DataTable columns={columns} data={myItems} />
    </div>
  );
};
