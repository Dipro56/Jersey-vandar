import React from 'react';
// import { useParams } from 'react-router-dom';
import { useFirebase } from '../../hooks/useFirebase';
import { useGetAllItem } from '../../hooks/useGetAllItem';
import { MyItemsTable } from './MyItemsTable';

export const MyItemsPage = () => {
  const { items } = useGetAllItem();

  const { user } = useFirebase();

  // const { id } = useParams();

  const myItems = items.filter((item) => {
    return item.addedById === user.uid;
  });
  //  setMyItems(myItem);
  console.log('my Items', myItems);

  return (
    <div>
      <MyItemsTable />
      {/* {myItems.map((data) => (
        <MyItemCard key={data.id} myItemData={data} />
      ))} */}
    </div>
  );
};
