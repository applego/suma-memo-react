import { Button } from '@material-ui/core';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const AddMemoButton = () => {
  const location = useLocation();

  return (
    <>
      <Button
        variant='outlined'
        color='primary'
        component={Link}
        to={{
          pathname: '/memo/new',
          state: { background: location },
        }}
      >
        Add Memo
      </Button>
      <div className='module-spacer--small' />
    </>
  );
};

export default AddMemoButton;
