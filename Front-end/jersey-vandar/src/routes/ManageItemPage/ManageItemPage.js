import { TextField } from '@mui/material';
import React, { useRef, useState } from 'react';
import { Header } from '../../components/Header/Header';
import { ManageItemCard } from '../../components/ManageItemCard/ManageItemCard';
import { useGetAllItem } from '../../hooks/useGetAllItem';
import { FaSearch } from 'react-icons/fa';
import cogoToast from 'cogo-toast';

export const ManageItemPage = () => {
  let { items } = useGetAllItem();
  const searchRef = useRef('');
  // let newItems;

  const [searchItem, setSerachItem] = useState();
  const [serachValue, setSerachValue] = useState('');

  console.log('searchItem', searchItem);

  const submitSearch = (event) => {
    event.preventDefault();
    const search = searchRef.current.value;
    items = items.filter((item) => {
      return item.itemName.toLowerCase().includes(search.toLowerCase());
    });
    setSerachValue(search);
    setSerachItem(items);

    if (items) {
      cogoToast.success(`Showing search result for ${search}`);
    }
  };

  return (
    <div>
      <Header />
      <h5 className="m-4">Search Item</h5>
      <form onSubmit={submitSearch}>
        <div className="container d-flex form-group mt-4 mb-3 col-lg-4 col-sm-6 col-sm-8">
          <TextField
            inputRef={searchRef}
            id="outlined-basic"
            label="Search"
            variant="outlined"
            type="text"
            className="form-control shadow w-100"
            name="search"
            required
          />
          <button type="submit" className="btn btn-primary">
            <div className="d-flex justify-content-center align-items-center">
              {' '}
              <FaSearch size={14} />
              <p className="m-2">Search</p>
            </div>
          </button>
        </div>
      </form>
      <div className="d-flex justify-content-center mb-5 item-slide-in">
        <div className="container row justify-content-center ">
          <div className="d-flex justify-content-center">
            {serachValue ? (
              <div>
                <h6>Search results for {serachValue} </h6>
                <p>{searchItem.length} item found </p>
              </div>
            ) : (
              <h6> </h6>
            )}
          </div>
          {searchItem?.map((data) => (
            <ManageItemCard key={data.id} itemData={data} />
          ))}
          {/* {
            searchItem.map((data) => (
              <ManageItemCard key={data.id} itemData={data} />
            )) 
          } */}
        </div>
      </div>
      <div className="d-flex justify-content-center mb-5 item-slide-in card-body shadow-lg">
        <div className="container row ">
          <h4 className="m-4">All Item</h4>
          {items.map((data) => (
            <ManageItemCard key={data.id} itemData={data} />
          ))}
        </div>
      </div>
    </div>
  );
};
