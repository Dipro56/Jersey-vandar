import axios from 'axios';
import React from 'react';
import { MessageTile } from '../../components/MessageTile/MessageTile';
import { useGetAllMessage } from '../../hooks/useGetAllMessage';

export const InboxPage = () => {
  const { allMessage } = useGetAllMessage();

  const handleAllDelete = () => {
    console.log('Delete all message');
    const URL = `http://localhost:5000/deleteAllMessage`;
    axios
      .delete(URL)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    window.location.reload(true);
  };

  if (allMessage.length > 0) {
    return (
      <div className="container col-lg-7 col-md-8 col-12">
        <h5 className="p-5">All message</h5>
        {allMessage?.map((data) => (
          <MessageTile key={data.id} messageData={data} />
        ))}
        <button onClick={handleAllDelete} className="btn btn-danger m-4">
          Delete all
        </button>
      </div>
    );
  } else {
    return (
      <div className="container col-lg-7 col-md-8 col-12">
        <p className="text-muted m-5">No message in inbox</p>
      </div>
    );
  }
};
