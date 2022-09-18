import { Card } from '@mui/material';
import React from 'react';

export const MessageTile = (props) => {
  const { dateAndTime, description } = props.messageData;
  return (
    <div className="mt-3 mb-3 shadow-lg">
      <Card variant="outlined">
        <div className="p-3 d-flex justify-content-start">
          <q className="text-start ">{description}</q>
        </div>
        <p className="text-muted text-start p-3">{dateAndTime}</p>
      </Card>
    </div>
  );
};
