import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';

const MemoView = () => {
  const { id } = useParams();
  const selector = useSelector((state) => state.memolist);
  const selectedMemo = selector.filter((m) => m.id === id)[0];

  const title = selectedMemo?.title || '';
  const text = selectedMemo?.text || '';

  return (
    <>
      <Typography variant='h4'>{title}</Typography>
      <Typography gutterBottom>{text}</Typography>
    </>
  );
};

export default MemoView;
